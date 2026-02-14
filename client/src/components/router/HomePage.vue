<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

import TransitionScroll from '../util/TransitionScroll.vue'
import HeroSection from '../HomePageComponents/HeroSection.vue'
import CampCarousel from '../HomePageComponents/CampCarousel.vue'
import CallToActionSection from '../HomePageComponents/CallToActionSection.vue'
import ActivitesSection from '../HomePageComponents/ActivitesSection.vue'
import CompanyProfile from '../HomePageComponents/CompanyProfile.vue'
import ClientTestimonals from '../HomePageComponents/ClientTestimonals.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})
</script>

<template>
  <div class="max-w-screen h-1600">
    <div
      class="flex items-center bg-[url(@/assets/images/camping-stars-2.avif)] bg-cover bg-center h-200 md:h-screen"
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
