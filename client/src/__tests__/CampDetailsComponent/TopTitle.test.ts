import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TopTitle from '@/components/CampDetailsComponents/TopTitle.vue'

describe('TopTitle.vue', () => {
  it('should render the camp name and the description', () => {
    const wrapper = mount(TopTitle, {
      props: {
        imgPath: 'some/path.jpg',
        blurryImg: 'some/blurry/path.jpg',
        name: 'Camp Name',
        shortDescription: 'A short description of the camp.',
      },
    })

    // Check if the element with data-test="header" is rendered
    const headerElement = wrapper.find('[data-test="header"]')
    expect(headerElement.exists()).toBe(true)

    // Check if the element with data-test="description" is rendered
    const descriptionElement = wrapper.find('[data-test="description"]')
    expect(descriptionElement.exists()).toBe(true)
  })

  it('should use the data from the props', () => {
    const wrapper = mount(TopTitle, {
      props: {
        imgPath: 'some/path.jpg',
        blurryImg: 'some/blurry/path.jpg',
        name: 'Test Camp Name',
        shortDescription: 'Test short description.',
      },
    })

    // Check the rendered text content
    const headerElement = wrapper.find('[data-test="header"]')
    expect(headerElement.text()).toBe('Test Camp Name')

    const descriptionElement = wrapper.find('[data-test="description"]')
    expect(descriptionElement.text()).toBe('Test short description.')
  })
})