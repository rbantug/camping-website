<script setup lang="ts">
import { useMainStore } from '@/stores/mainStore'
import { useBreakpoints } from '@vueuse/core'

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'

const mainStore = useMainStore()

const iconArr = mainStore.getIconArr

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const md = breakpoints.isGreaterOrEqual('md')

const subjectList = [
  'General Inquiry',
  'Support Request',
  'Booking / Reservation Question',
  'Pricing Inquiry',
  'Technical Issue',
  'Feedback / Suggestions',
  'Partnership / Business Proposal',
  'Complaint',
  'Order Issue / Refund Request',
]
</script>

<template>
  <div class="w-[90%] -mt-40 mx-auto md:w-[80%] md:-mt-70 lg:w-[60%]">
    <TransitionScroll delay="delay-[1s]">
      <div
        class="h-fit bg-neutral-100 border border-transparent shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-2xl dark:shadow-none dark:bg-neutral-900 dark:border-neutral-400"
      >
        <div class="w-[90%] mx-auto">
          <form class="flex flex-col">
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-8">
              <div class="flex flex-col gap-y-4 group">
                <label for="name" class="text-md font-bold text-neutral-900 dark:text-neutral-100"
                  >Full name</label
                >
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  class="w-full px-5 py-4 bg-neutral-100 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-transparent text-lg duration-300 transition-all hover:shadow-none hover:border-neutral-400 user-invalid:border-red-500 focus:border-accent-secondary active:border-accent-secondary dark:bg-neutral-900 dark:border-neutral-400 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:border-accent-secondary md:w-[90%]"
                  required
                />
              </div>
              <div class="flex flex-col gap-y-4">
                <label for="email" class="text-md font-bold text-neutral-900 dark:text-neutral-100">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  class="w-full px-5 py-4 bg-neutral-100 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-transparent text-lg duration-300 transition-all hover:shadow-none hover:border-neutral-400 user-invalid:border-red-500 focus:border-accent-secondary active:border-accent-secondary dark:bg-neutral-900 dark:border-neutral-400 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:border-accent-secondary md:w-[90%]"
                  required
                />
              </div>
              <div class="flex flex-col gap-y-4">
                <label for="phone" class="text-md font-bold text-neutral-900 dark:text-neutral-100"
                  >Phone</label
                >
                <input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456 - 789"
                  pattern="^\(\d{3}\)\s\d{3}-\d{4}$"
                  class="w-full px-5 py-4 bg-neutral-100 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-transparent text-lg duration-300 transition-all hover:shadow-none hover:border-neutral-400 user-invalid:border-red-500 focus:border-accent-secondary active:border-accent-secondary dark:bg-neutral-900 dark:border-neutral-400 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:border-accent-secondary md:w-[90%]"
                  required
                />
              </div>
              <div class="flex flex-col gap-y-4">
                <label
                  for="subject"
                  class="text-md font-bold text-neutral-900 dark:text-neutral-100"
                  >Subject</label
                >
                <select
                  id="subject"
                  placeholder="ex. Support"
                  class="w-full px-5 py-4 bg-neutral-100 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-transparent text-lg duration-300 transition-all hover:shadow-none hover:border-neutral-400 user-invalid:border-red-500 focus:border-accent-secondary active:border-accent-secondary dark:bg-neutral-900 dark:border-neutral-400 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:border-accent-secondary md:w-[90%]"
                  required
                >
                  <option v-for="subject in subjectList" :key="subject">
                    {{ subject }}
                  </option>
                </select>
              </div>
            </div>
            <div class="mt-8 flex flex-col gap-y-4">
              <label for="message" class="text-md font-bold text-neutral-900 dark:text-neutral-100"
                >Message</label
              >
              <textarea
                id="message"
                placeholder="Please type your message here..."
                class="w-full h-30 px-5 py-4 bg-neutral-100 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-transparent text-lg duration-300 transition-all hover:shadow-none hover:border-neutral-400 user-invalid:border-red-500 focus:border-accent-secondary active:border-accent-secondary dark:bg-neutral-900 dark:border-neutral-400 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:border-accent-secondary peer"
                required
                spellcheck="true"
              />
            </div>
            <div class="w-full"></div>
          </form>
          <div class="my-10 flex flex-col md:flex-row justify-between items-center">
            <PrimaryButton
              label="Submit"
              :size="md ? 'large' : 'default'"
              class="w-full md:w-fit"
            />
            <div class="mt-5 flex gap-x-2">
              <!-- social media buttons -->
              <div v-for="{ name, svg } in iconArr" :key="name">
                <a href="/">
                  <div
                    class="w-8 h-8 md:w-9 md:h-9 rounded-full bg-transparent shadow-md/20 flex items-center justify-center dark:shadow-none dark:ring-2 dark:ring-neutral-500"
                  >
                    <div
                      v-html="svg"
                      class="text-accent-primary md:scale-110 dark:text-accent-secondary"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionScroll>
  </div>
</template>
