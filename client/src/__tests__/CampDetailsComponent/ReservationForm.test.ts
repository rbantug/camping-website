import { mount, VueWrapper
 } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { beforeAll, describe, it, expect, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import type { ComponentPublicInstance } from 'vue'

import ReservationForm from '../../components/CampDetailsComponents/ReservationForm.vue'
import { useMainStore } from '../../stores/mainStore.ts'

// Do not delete! A pinia instance is required for this test to work.
let mainStore
const router = createRouter({
  history: createWebHistory(),
  routes: [],
})
let wrapper:VueWrapper<ComponentPublicInstance>

beforeAll(() => {
  mainStore = useMainStore(createPinia())
  wrapper = mount(ReservationForm, {
    props: {
      name: 'test name',
      price: '11',
      image: 'some/path.jpg',
    },
    global: {
      plugins: [router],
    },
  })
})

describe('ReservationForm', () => { 

  it("should render all elements and the displayed price is the same with what's in the props", async () => {

    const headerElement = wrapper.get('[data-test="header"]')
    expect(headerElement.text()).toBe('Reserve Camp')

    const headerDescripEl = wrapper.get('[data-test="headerDescription"]')
    expect(headerDescripEl.text()).toBe(
      'Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo.',
    )

    const priceContainerEl = wrapper.get('[data-test="priceContainer"]')
    const spans = priceContainerEl.findAll('span')
    const spanTextArr = spans.map(s => s.text())
    expect(spanTextArr).toStrictEqual(['From', '$ 11 USD', '/night']) 

    const startDateLabelEl = wrapper.get('[data-test="startDateLabel"]')
    expect(startDateLabelEl.text()).toBe('Start Date') 

    const startDateInputEl = wrapper.get('[data-test="startDateInput"]')
    expect(startDateInputEl).toBeTruthy()
    
    // this element is hidden on startup with the use of v-show
    const startDateErrorEl = wrapper.get('[data-test="startDateError"]')
    expect(startDateErrorEl).toBeTruthy()
    expect(startDateErrorEl.element.style.display).toBe('none')
    
    const nightsLabelEl = wrapper.get('[data-test="nightsLabel"]')
    expect(nightsLabelEl.text()).toBe('Nights')

    const nightsInputEl = wrapper.get('[data-test="nightsInput"]')
    expect(nightsInputEl).toBeTruthy()

    // this element is hidden on startup with the use of v-show
    const nightsErrorEl = wrapper.get('[data-test="nightsError"]')
    expect(nightsErrorEl).toBeTruthy()
    expect(nightsErrorEl.element.style.display).toBe('none')
    
    const addToCartBtnEl = wrapper.get('[data-test="addToCartBtn"]')
    expect(addToCartBtnEl).toBeTruthy()
    
    const buyMeBtnEl = wrapper.get('[data-test="buyMeBtn"]')
    expect(buyMeBtnEl).toBeTruthy()
  })

  describe('start date input field', () => {
    it('should have a red border and an error message if you use an invalid date', async() => {
      // mock user input with invalid date
      const startDateInputEl = wrapper.get('[data-test="startDateInput"]')
      const newDate = '2024-01-21'
      await startDateInputEl.setValue(newDate)
      

      // mock your system's time
      const sysDate = new Date(2025, 2, 21)
      vi.setSystemTime(sysDate)

      // Ran the method instead of clicking the "Add to Cart" button because it doesn't want to work
      await wrapper.vm.addToCart()

      const startDateErrorEl = wrapper.get('[data-test="startDateError"]')

      // start date input field now has a red border
      expect(startDateInputEl.element.classList.value).toContain(
        'border-red-500 dark:border-red-500',
      )

      // the start date error is now visible
      expect(startDateErrorEl.element.style.display).toBe('')
    })
  })

  describe('nights number input field', () => {
    it('should have a red border and an error message if you use an invalid input (not number or less than 1)', async () => {
      const nightsInputEl = wrapper.get('[data-test="nightsInput"]')
      await nightsInputEl.setValue(0)

      await wrapper.vm.addToCart()

      const nightsErrorEl = wrapper.get('[data-test="nightsError"]')

      // nights input field now has a red border
      expect(nightsInputEl.element.classList.value).toContain(
        'border-red-500 dark:border-red-500',
      )

      // the nights error is now visible
      expect(nightsErrorEl.element.style.display).toBe('')
    })
  })
})
