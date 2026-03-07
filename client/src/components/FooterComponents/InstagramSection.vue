<script setup lang="ts">
const imgArr = [
  'https://dl.dropboxusercontent.com/scl/fi/uke64popxeivsg2w2f1dw/pexels-dtanpt-9551192.avif?rlkey=97mbyqas5kdjxll9l17p3tfeu',
  'https://dl.dropboxusercontent.com/scl/fi/ozwx89ugquq32eeu5j952/pexels-faysonmerege-5627347.avif?rlkey=fx9v2w3tfvua0ke57t7hlomqr',
  'https://dl.dropboxusercontent.com/scl/fi/dqh9nkyqpn1gmzpsekf26/pexels-gantas-4484242.avif?rlkey=sx2tcjzsjfjl0g8l826rnqnvl',
  'https://dl.dropboxusercontent.com/scl/fi/ybpof71om2esnc3sehhnz/pexels-himanshu-raj-175406597-11091486.avif?rlkey=6u1ld6i7k5gfmx30yh3sig1qq',
  'https://dl.dropboxusercontent.com/scl/fi/4f3r02rzw4rmx7b41i23m/pexels-kampveyaban-16034782.avif?rlkey=ve82yjyiw5dtlo8llhydzv3zl',
  'https://dl.dropboxusercontent.com/scl/fi/cvgwzmv4cw1b062qvn73s/pexels-rhys-abel-2233101-9711099.avif?rlkey=xv1inyy1at21bm0b6ytwx6rys'
]
</script>

<template>
  <div class="mb-12 max-w-95 lg:max-w-90">
    <div class="font-semibold mb-4 md:text-lg max-w-3xl dark:text-neutral-200">Follow on Instagram</div>
    <div class="grid grid-cols-3 gap-y-1 lg:gap-x-6">
      <div v-for="img in imgArr" :key="img">
        <div class="inline-block overflow-hidden w-30 h-30 rounded-xl">
            <img :src="img" alt="" class="w-30 h-30 object-cover rounded-xl hover:cursor-pointer hover:scale-125 duration-300" />
        </div>
      </div>
    </div>
  </div>
</template>
