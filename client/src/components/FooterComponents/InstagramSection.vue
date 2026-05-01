<script setup lang="ts">
import { useToast } from '@/composables/useToast'

const imgArr = [
  'https://dl.dropboxusercontent.com/scl/fi/uke64popxeivsg2w2f1dw/pexels-dtanpt-9551192.avif?rlkey=97mbyqas5kdjxll9l17p3tfeu',
  'https://dl.dropboxusercontent.com/scl/fi/ozwx89ugquq32eeu5j952/pexels-faysonmerege-5627347.avif?rlkey=fx9v2w3tfvua0ke57t7hlomqr',
  'https://dl.dropboxusercontent.com/scl/fi/dqh9nkyqpn1gmzpsekf26/pexels-gantas-4484242.avif?rlkey=sx2tcjzsjfjl0g8l826rnqnvl',
  'https://dl.dropboxusercontent.com/scl/fi/ybpof71om2esnc3sehhnz/pexels-himanshu-raj-175406597-11091486.avif?rlkey=6u1ld6i7k5gfmx30yh3sig1qq',
  'https://dl.dropboxusercontent.com/scl/fi/4f3r02rzw4rmx7b41i23m/pexels-kampveyaban-16034782.avif?rlkey=ve82yjyiw5dtlo8llhydzv3zl',
  'https://dl.dropboxusercontent.com/scl/fi/cvgwzmv4cw1b062qvn73s/pexels-rhys-abel-2233101-9711099.avif?rlkey=xv1inyy1at21bm0b6ytwx6rys'
]

const { show, setPosition } = useToast()

function clickImgs() {
  setPosition('bottom-center')
  show('Sorry! This is a mock of an embedded instagram feed.', 'info', 5000)
}
</script>

<template>
  <div class="mb-12 max-w-85 md:max-w-100 lg:max-w-90">
    <div class="font-semibold mb-4 md:text-lg max-w-3xl dark:text-neutral-200">Follow on Instagram</div>
    <div class="grid grid-cols-3 gap-y-1 lg:gap-x-8">
      <div v-for="img in imgArr" :key="img">
        <div class="inline-block overflow-hidden w-25 h-25 rounded-xl md:w-30 md:h-30">
            <img :src="img" alt="" class="w-25 h-25 object-cover rounded-xl hover:cursor-pointer hover:scale-125 duration-300 md:w-30 md:h-30" @click="clickImgs"/>
        </div>
      </div>
    </div>
  </div>
</template>
