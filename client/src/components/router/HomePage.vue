<script setup lang="ts">
import { useHead } from '@unhead/vue'

import TransitionScroll from '../util/TransitionScroll.vue'
import HeroSection from '../HomePageComponents/HeroSection.vue'
import CampCarousel from '../HomePageComponents/CampCarousel.vue'
import CallToActionSection from '../HomePageComponents/CallToActionSection.vue'
import ActivitesSection from '../HomePageComponents/ActivitesSection.vue'
import CompanyProfile from '../HomePageComponents/CompanyProfile.vue'
import ClientTestimonals from '../HomePageComponents/ClientTestimonals.vue'

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/a1q1m6i4529oba7ls4kh6/camping-stars-2.avif?rlkey=14kkjyab0xaii38ns6pz5f0jy'
    }
  ]
})
</script>

<template>
  <div class="max-w-screen h-1830 md:h-1660 lg:h-1545">
    <div
      class="flex items-center bg-[url(https://dl.dropboxusercontent.com/scl/fi/a1q1m6i4529oba7ls4kh6/camping-stars-2.avif?rlkey=14kkjyab0xaii38ns6pz5f0jy)] bg-cover bg-center h-200 md:h-screen"
    >
      <TransitionScroll>
        <HeroSection />
      </TransitionScroll>
    </div>
    <CampCarousel />
    <ActivitesSection />
    <CallToActionSection />
    <CompanyProfile />
    <ClientTestimonals />
    
  </div>
</template>
