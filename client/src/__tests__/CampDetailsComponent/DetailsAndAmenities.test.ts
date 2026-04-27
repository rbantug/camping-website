import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import DetailsAndAmenities from '@/components/CampDetailsComponents/DetailsAndAmenities.vue'

describe('DetailsAndAmenities', () => {
  it('should render all the necessary elements except', () => {
    const sampleBadge = ['toilet', 'firePit', 'trashBin']
    const sampleFullDescrip = 'Lorem ipsum'

    const wrapper = mount(DetailsAndAmenities, {
      props: {
        fullDescription: sampleFullDescrip,
        amenities: sampleBadge,
      },
      shallow: true,
    })

    const headerMainEl = wrapper.get('[data-test="headerMain"]')
    expect(headerMainEl.text()).toBe('About the camp')

    const descriptionEl = wrapper.get('[data-test="fullDescription"]')
    expect(descriptionEl.text()).toBe(sampleFullDescrip)

    const listContentEl = wrapper.findAll('[data-test="listContent"]')
    const getAdditionalContentList:string[] = wrapper.vm.additionalContentList
    listContentEl.forEach((el, index) => {
        expect(el.element.children[1].textContent).toBe(getAdditionalContentList[index])
    })

    const paragraphContentEl = wrapper.findAll('[data-test="paragraphContent"]')
    const getAadditionalContentParagraph: string[] = wrapper.vm.additionalContentParagraph
    paragraphContentEl.forEach((el, index) => {
      expect(el.text()).toBe(getAadditionalContentParagraph[index])
    })

    const amenityHeader = wrapper.find('[data-test="headerAmenities"]')
    expect(amenityHeader.text()).toBe('Camp Amenities')
  })

  it('should render the correct number of products and their details', () => {
    // 1. Mount the component and pass the prop data
    const sampleBadge = ['toilet', 'firePit', 'trashBin']

    const wrapper = mount(DetailsAndAmenities, {
      props: {
        fullDescription: 'Lorem ipsum',
        amenities: sampleBadge,
      },
      shallow: true,
    })

    // 2. Select the common container for the looped items
    const listItems = wrapper.findAll('[data-test="amenityBadge"]')

    // 3. Assert the total number of rendered items
    expect(listItems.length).toBe(sampleBadge.length)

    // 4. Iterate through the expected items and check the rendering of data
    listItems.forEach((badge, index) => {
      expect(badge.element.children[0].getAttribute('name')).toBe(sampleBadge[index])
    })
  })

  it('should render no items when the products list is empty', () => {
    const noBadge: string[] = []

    const wrapper = mount(DetailsAndAmenities, {
      props: {
        fullDescription: 'Lorem ipsum',
        amenities: noBadge,
      },
      shallow: true,
    })

    const listItems = wrapper.findAll('[data-test="amenityBadge"]')

    expect(listItems.length).toBe(noBadge.length)
  })
})
