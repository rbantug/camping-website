<script setup lang="ts">
import LazyLoadImage from '../util/LazyLoadImage.vue'
import TransitionScroll from '../util/TransitionScroll.vue'

const content = [
  {
    img: 'https://dl.dropboxusercontent.com/scl/fi/qi2a4rss8uvz2qrr6iss2/contact-us-email.png?rlkey=m6cen4wkq33hogp6m6oxord4g',
    label: 'Have questions?',
    contactDetail: 'contact@camp.com',
    link: 'mailto:contact@camp.com',
  },
  {
    img: 'https://dl.dropboxusercontent.com/scl/fi/h1z1ds8oidd6thte0qgwf/contact-us-phone.png?rlkey=rtiapd3jjw2t009gfr9qcmf72',
    label: 'Give us a call',
    contactDetail: '(878) 142 - 9932',
    link: 'tel:(878)142-9932',
  },
  {
    img: 'https://dl.dropboxusercontent.com/scl/fi/qf90w4fslt2kvedmokjnb/contact-us-reservation.png?rlkey=9bj780btxhs24njkjevl8xd6a',
    label: 'Got a complex reservation?',
    contactDetail: 'reservation@camp.com',
    link: 'mailto:reservation@camp.com',
  },
]
</script>

<template>
  <div class="h-fit w-[90%] mx-auto py-20 lg:w-[80%]">
    <TransitionScroll threshold>
      <div class="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="{ img, label, contactDetail, link } in content"
          :key="label"
          class="flex flex-col items-center gap-y-2 md:even:justify-end md:flex-row md:gap-x-5 lg:even:justify-center lg:justify-center hover:-translate-y-2 duration-200 group"
        >
          <div
            class="w-20 h-20 bg-accent-outline rounded-full outline-hidden flex items-center justify-center"
          >
            <LazyLoadImage :img-path="img" class="w-15 h-15" />
          </div>
          <div class="flex flex-col text-center md:text-left">
            <span
              class="text-lg text-neutral-700 dark:text-neutral-400 group-hover:text-accent-secondary"
              >{{ label }}</span
            >
            <a
              :href="link"
              class="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-accent-secondary"
              >{{ contactDetail }}</a
            >
          </div>
        </div>
      </div>
    </TransitionScroll>
  </div>
</template>
