<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useMainStore } from '@/stores/mainStore'

import TopTitle from '../CampDetailsComponents/TopTitle.vue'
import DetailsAndAmenities from '../CampDetailsComponents/DetailsAndAmenities.vue'

import type { Camps } from '../../../interface'

const route = useRoute()
const router = useRouter()
const { slug } = route.params

// TODO: fetch individual camp details directly from the server. For now, all camp details will come from the mainStore.
const mainStore = useMainStore()
const allCamps = mainStore.getAllCamps.value

const camp = ref<Camps>()

onMounted(() => {
    console.log(route.params)
    const campIndex = allCamps.findIndex(x => x.slug === slug)

    if(campIndex === -1) router.push('/error')

    camp.value = allCamps[campIndex]
})
</script>

<template>
  <div class="h-1340 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
    <TopTitle :img-path="camp?.image" :blurry-img="camp?.blurryImg" :name="camp?.name" :short-description="camp?.shortDescription"/>
    <DetailsAndAmenities />
  </div>
</template>
