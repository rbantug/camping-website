<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
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
      href: 'https://dl.dropboxusercontent.com/scl/fi/jims4srpwojzy4w57cnq1/camping-stars-2.avif?rlkey=zbeqyx8fu9hyej729k1ds45zq'
    }
  ]
})

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})
</script>

<template>
  <div class="max-w-screen h-1600">
    <div
      class="flex items-center bg-[url(https://dl.dropboxusercontent.com/scl/fi/jims4srpwojzy4w57cnq1/camping-stars-2.avif?rlkey=zbeqyx8fu9hyej729k1ds45zq)] bg-cover bg-center h-200 md:h-screen"
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
