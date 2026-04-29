import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { beforeAll, describe, it, expect, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import CampGallery from '@/components/CampDetailsComponents/CampGallery.vue'
import { useMainStore } from '@/stores/mainStore.ts'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})
let mainStore

beforeAll(() => {
  mainStore = useMainStore(createPinia())
})

describe('CampGallery', () => {
  it('should render all visible elements and have the correct text', () => {
    const wrapper = mount(CampGallery, {
      props: {
        category: 'beach'
      },
      global: {
        plugins: [router]
      }
    })

    const headerEl = wrapper.get('[data-test="header"]')
    expect(headerEl.text()).toBe('Camp Gallery')

    wrapper.get('[data-test="btn"]')

    const images = wrapper.findAll('[data-test="imageGroup"]')
    const imgPathFromStore = mainStore.getGalleryImage[wrapper.props().category]
    const blurryImgPathFromStore = mainStore.getGalleryBlurryImg[wrapper.props().category]
    images.forEach((img, index) => {
      expect(img.html()).toContain(blurryImgPathFromStore[index])
      expect(img.html()).toContain(imgPathFromStore[index])
    })
  })

  it('should call the function "scrollToForm" if "Book camp" button was clicked', async () => {
    const mockScrollToForm = vi.fn()

    const wrapper = mount(CampGallery, {
      props: {
        category: 'beach',
      },
      global: {
        plugins: [router],
        mocks: {
          scrollToForm: mockScrollToForm,
        },
      },
    })

    const btnEl = wrapper.get('[data-test="btn"]')
    await btnEl.trigger('click')
    expect(mockScrollToForm).toHaveBeenCalled()
    
  })

  describe('when clicking an image', () => {
    it('should render the overlay, the clicked image, the next button for swiper.js and previous button for swiper.js', async () => {
      const wrapper = mount(CampGallery, {
        props: {
          category: 'beach',
        },
        global: {
          plugins: [router],
          stubs: {
            Swiper: {
              template: '<div class="swiper"><slot /></div>',
            },
            SwiperSlide: {
              template: '<div class="swiper-slide"><slot /></div>',
            },
          },
        },
        shallow: true,
      })

      const imgIndex = 1

      // overlay should not be visible
      let overlayEl = wrapper.find('[data-test="overlay"]')
      expect(overlayEl.exists()).toBe(false)

      await wrapper.vm.showOverlay(imgIndex - 1)

      // overlay is now visible
      overlayEl = wrapper.find('[data-test="overlay"]')
      expect(overlayEl.exists()).toBe(true) 

      // assertion for checking if the image you clicked is the first image you'll see in the image carousel
      const imgSlider = wrapper.get('[data-test="img-slider"]')
      const { imgpath, blurryimgpath } = imgSlider.attributes()
      const imgPathFromStore = mainStore.getGalleryImage[wrapper.props().category][imgIndex - 1]
      const blurryImgPathFromStore = mainStore.getGalleryBlurryImg[wrapper.props().category][imgIndex - 1]
      expect(imgPathFromStore).toBe(imgpath)
      expect(blurryImgPathFromStore).toBe(blurryimgpath)

      // check if the next and previous buttons were rendered
      wrapper.get('[data-test="swiperNextBtn"]')
      wrapper.get('[data-test="swiperPrevBtn"]')
    })

    it('should show the correct image when navigating through swiper.js', async () => {
      const slideNext = vi.fn()
      const slidePrev = vi.fn()

      const wrapper = mount(CampGallery, {
        props: {
          category: 'beach',
        },
        global: {
          plugins: [router],
          stubs: {
            Swiper: {
              template: '<div class="swiper"><slot /></div>',
              mounted() {
                this.$emit('swiper', {
                  slideNext,
                  slidePrev
                })
              }
            },
            SwiperSlide: {
              template: '<div class="swiper-slide"><slot /></div>',
            },
          },
        },
      })

      const imgIndex = 1
      await wrapper.vm.showOverlay(imgIndex - 1)

      const swiperNextBtn = wrapper.get('[data-test="swiperNextBtn"]')
      const swiperPrevBtn = wrapper.get('[data-test="swiperPrevBtn"]')

      await swiperNextBtn.trigger('click')
      expect(slideNext).toHaveBeenCalled()

      await swiperPrevBtn.trigger('click')
      expect(slidePrev).toHaveBeenCalled()
    })
  })
})
