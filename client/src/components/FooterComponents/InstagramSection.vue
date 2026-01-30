<script setup lang="ts">
import img1 from '@/assets/images/pexels-dtanpt-9551192.jpg'
import img2 from '@/assets/images/pexels-faysonmerege-5627347.jpg'
import img3 from '@/assets/images/pexels-gantas-4484242.jpg'
import img4 from '@/assets/images/pexels-himanshu-raj-175406597-11091486.jpg'
import img5 from '@/assets/images/pexels-kampveyaban-16034782.jpg'
import img6 from '@/assets/images/pexels-rhys-abel-2233101-9711099.jpg'

const imgArr = [img1, img2, img3, img4, img5, img6]
</script>

<template>
  <div class="mb-12 max-w-95 lg:max-w-90">
    <div class="font-semibold mb-4 md:text-lg max-w-3xl">Follow on Instagram</div>
    <div class="grid grid-cols-3 gap-y-1 lg:gap-x-6">
      <div v-for="img in imgArr" :key="img">
        <div class="inline-block overflow-hidden w-30 h-30 rounded-xl">
            <img :src="img" alt="" class="w-30 h-30 object-cover rounded-xl hover:cursor-pointer hover:scale-125 duration-300" />
        </div>
      </div>
    </div>
  </div>
</template>
