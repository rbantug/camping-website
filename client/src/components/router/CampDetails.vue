<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import { useMainStore } from '@/stores/mainStore'

import TopTitle from '../CampDetailsComponents/TopTitle.vue'
import DetailsAndAmenities from '../CampDetailsComponents/DetailsAndAmenities.vue'
import ReservationForm from '../CampDetailsComponents/ReservationForm.vue'
import CampGallery from '../CampDetailsComponents/CampGallery.vue'

import type { Camps } from '../../../interface'

// route param via props
const props = defineProps({
  slug: {
    type: String,
  }
})

const router = useRouter()

// TODO: fetch individual camp details directly from the server. For now, all camp details will come from the mainStore.
const mainStore = useMainStore()
const allCamps = mainStore.getAllCamps.value

const camp = ref<Camps>()

watch(
  () => props.slug,
  (newSlug) => {
    if (!newSlug) return
    updateCampDetail(newSlug)
  },
  { immediate: true },
)

function updateCampDetail(slug:string) {
  const campIndex = allCamps.findIndex((x) => x.slug === slug)


  if (campIndex === -1) router.push('/error')

  camp.value = allCamps[campIndex]
}
</script>

<template>
  <div class="h-fit bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
    <TopTitle
      :img-path="camp?.imageHires"
      :blurry-img="camp?.blurryImg"
      :name="camp?.name"
      :short-description="camp?.shortDescription"
    />
    <div class="relative pb-20 flex flex-col items-center lg:flex-row lg:justify-center">
      <DetailsAndAmenities :full-description="camp?.fullDescription" :amenities="camp?.amenities" class="lg:w-[60%]"/>
      <ReservationForm :price="camp?.price"  class="lg:w-[40%] lg:sticky lg:top-0"/>
    </div>
    <CampGallery :category="camp?.category"/>
  </div>
</template>
