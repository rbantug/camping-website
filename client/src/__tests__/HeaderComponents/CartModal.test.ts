import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { createRouter, createWebHistory } from 'vue-router'

import CartModal from '@/components/HeaderComponents/CartModal.vue'

vi.mock('@/composables/useToast', () => ({
  useToast: vi.fn(() => ({
    setPosition: vi.fn(),
    show: vi.fn()
  }))
}))

import { useToast } from '@/composables/useToast'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

describe('CartModal', () => {
  it('should not be rendered on startup', () => {
    const wrapper = mount(CartModal, {
      props: { isOpen: false },
      global: {
        stubs: {
          teleport: true,
        },
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              main: {
                cartData: [],
              },
            },
          }),
        ],
      },
    })

    const getOverlay = wrapper.find('[data-test="overlay"]') 
    expect(getOverlay.isVisible()).toBe(false)
  })

  it('should be rendered when props.isOpen is true', () => {
    const wrapper = mount(CartModal, {
      props: { isOpen: true },
      global: {
        stubs: {
          teleport: true,
        },
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              main: {
                cartData: [],
              },
            },
          }),
        ],
      },
    })

    const getOverlay = wrapper.find('[data-test="overlay"]')
    expect(getOverlay.isVisible()).toBe(true)
  })

  it('should not be visible if you click on the close button or the overlay', () => {})

  describe('if there the cart is empty', () => {
    const wrapper = mount(CartModal, {
      props: { isOpen: true },
      global: {
        stubs: {
          teleport: true,
        },
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              main: {
                cartData: [],
              },
            },
          }),
        ],
      },
    })

    it('should render the header "Your Cart" and "0"', () => {
      const getHeader = wrapper.get('[data-test="header"]')
      expect(getHeader.text()).toBe('Your Cart')

      const getTotalCartItems = wrapper.get('[data-test="totalCartItems"]')
      expect(getTotalCartItems.text()).toBe('0')
    })

    it('should render the text "There are currently no camps" instead of a list of camps', () => {
      const cartItemsMsg = wrapper.get('[data-test="cartItemsMsg"]')
      expect(cartItemsMsg.text()).toBe('There are currently no camps')
    })

    it('should have a subtotal of 0', () => {
      const subtotal = wrapper.get('[data-test="subtotal"]')
      expect(subtotal.text()).toBe('$ 0.00 USD')
    })

    it('should have the checkout button disabled', () => {
      const checkoutBtn = wrapper.get('[data-test="checkoutBtn"]')
      expect(checkoutBtn.element.children[0].getAttributeNames()).toContain('disabled')
    })
  })

  describe('if there the cart is contain camps', () => {
    const mockData = [
      {
        name: 'hey',
        price: 100,
        image: 'img1',
        startDate: 'Jan 1, 2022',
        nights: 1
      },
      {
        name: 'you',
        price: 200,
        image: 'img2',
        startDate: 'Feb 1, 2022',
        nights: 2
      }
    ]

    const mockUseToast = vi.fn()

    const wrapper = mount(CartModal, {
      props: { isOpen: true },
      global: {
        stubs: {
          teleport: true,
        },
        mocks: {
          useToast: mockUseToast
        },
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              main: {
                cartData: mockData,
              },
            },
          }),
        ],
      },
    })

    it('should render the correct number of camps in the cart', () => {
      const getTotalCartItems = wrapper.get('[data-test="totalCartItems"]')
      expect(getTotalCartItems.text()).toBe(`${mockData.length}`)
    })

    it('should render a list of camps', () => {
      const getCartItems = wrapper.findAll('[data-test="cartItemGroup"]')
      getCartItems.forEach((item, index) => {
        const data = mockData[index]

        // check image
        expect(item.html()).toContain(`img src="${data.image}"`)
        // check name
        expect(item.html()).toContain(data.name)
        // check price
        expect(item.html()).toContain(`$${data.price * data.nights}.00`)
        // check date
        expect(item.html()).toContain(`Start date: ${data.startDate}`)
        // check nights
        expect(item.element.getElementsByTagName('input')[0].value).toBe(`${data.nights}`)
      })
    })

    it('should have a subtotal that is equal to the sum of all camp prices', () => {
      const mockSubtotal = mockData.reduce((acc, curVal) => {
        const total = curVal.nights * curVal.price
        return acc + total
      }, 0)

      const subtotal = wrapper.get('[data-test="subtotal"]')
      expect(subtotal.text()).toBe(`$ ${mockSubtotal}.00 USD`)
    })

    it('should show a toast when you click the checkout button', async () => {
      await wrapper.vm.goToCheckout()
      expect(useToast).toHaveBeenCalled()
    })

    it('should have the nights input field only allow number 1 to 9', async () => {
      const getNightsInput = wrapper.get('[data-test="nightsInput"]')
      await getNightsInput.setValue(0)
      await getNightsInput.trigger('blur')
      expect(getNightsInput.element.value).toBe('1')

      await getNightsInput.setValue('a')
      await getNightsInput.trigger('input')
      expect(getNightsInput.element.value).toBe('1')
    })
  })
})
