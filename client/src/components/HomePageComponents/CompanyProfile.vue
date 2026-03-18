<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const MDandUp = breakpoints.greaterOrEqual('md')

const images = [
  {
    path: 'https://dl.dropboxusercontent.com/scl/fi/yfkjtzwv60vlt4ij9rgr1/company-profile-1.avif?rlkey=9o7l26b5jqxba4675jpkkflks',
    blurryPath:
      'https://dl.dropboxusercontent.com/scl/fi/tqc6rdjkqgv7odhro32j7/company-profile-1.avif?rlkey=9ukctd1txrn8l14hd8gbzcxkv',
    altText: 'camping tents 1',
  },
  {
    path: 'https://dl.dropboxusercontent.com/scl/fi/7sd3rtg9paruptvulpdp6/company-profile-2.avif?rlkey=xitiacsxf6xtp9ts4g1wdvb70',
    blurryPath:
      'https://dl.dropboxusercontent.com/scl/fi/ve5qcx7jf035c574vxgy6/company-profile-2.avif?rlkey=yc4t7a82mohfu9ev04z4qjomp',
    altText: 'camping tents 2',
  },
  {
    path: 'https://dl.dropboxusercontent.com/scl/fi/rux4htg0w7eqilntylr1a/company-profile-3.avif?rlkey=sw73dvip6mlo9v753lf27igmo',
    blurryPath:
      'https://dl.dropboxusercontent.com/scl/fi/k1jokxz04jd0iehzh27mo/company-profile-3.avif?rlkey=r1jpu19ud4utq7359f2bbhjkw',
  },
  {
    path: 'https://dl.dropboxusercontent.com/scl/fi/8lxobo3jpq8so83nn4acb/company-profile-4.avif?rlkey=m33zzk62q0wukjswcsyqxlnpg',
    blurryPath:
      'https://dl.dropboxusercontent.com/scl/fi/3tqhg69hn5dcj302qq841/company-profile-4.avif?rlkey=wxzme40rj5f20l3lnsfxzc8l1',
    altText: 'camping tents 4',
  },
]
</script>

<template>
  <div
    class="bg-neutral-200 h-300 pt-40 dark:bg-neutral-800 transition-colors duration-300 md:h-350 lg:h-270 lg:pt-50"
  >
    <div
      class="w-[90%] mx-auto flex flex-col md:w-[92%] lg:w-[95%] lg:flex-row lg:gap-x-15 lg:items-center lg:max-w-300"
    >
      <div class="lg:order-2">
        <TransitionScroll :threshold="true">
          <div class="flex flex-col gap-y-4 lg:w-120">
            <h2 class="text-2xl font-bold text-neutral-800 md:text-3xl lg:text-4xl dark:text-white">
              What makes us different?
            </h2>
            <p class="text-neutral-600 leading-7 md:text-lg dark:text-neutral-500">
              Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex
              sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus
              mi.
            </p>
            <hr class="text-neutral-600 my-2 dark:text-neutral-500" />
            <p class="text-neutral-600 leading-7 md:text-lg md:mb-5 dark:text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing
              elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem
              placerat. Vitae pellentesque sem placerat in id cursus mi.
            </p>
            <div>
              <SecondaryButton
                :size="MDandUp ? 'large' : 'default'"
                label="About us"
                class="md:w-[20%] lg:w-[30%]"
                :white-ring="false"
              />
            </div>
          </div>
        </TransitionScroll>
      </div>
      <div class="lg:order-1">
        <TransitionScroll :threshold="true">
          <div class="mt-12 h-80 max-w-100 mx-auto md:max-w-210 lg:mt-0 lg:h-160">
            <div class="grid grid-cols-2 justify-center gap-3 md:gap-6">
              <div class="grid grid-rows-6 justify-end">
                <div class="row-span-4">
                  <LazyLoadImage
                    :img-path="images[0]?.path"
                    :blurry-img-path="images[0]?.blurryPath"
                    :alt-name="images[0]?.altText"
                    class="rounded-xl w-45 h-55 md:w-70 md:h-95"
                  />
                </div>
                <div class="row-span-2">
                  <LazyLoadImage
                    :img-path="images[2]?.path"
                    :blurry-img-path="images[2]?.blurryPath"
                    :alt-name="images[2]?.altText"
                    class="rounded-xl w-45 h-29 md:w-70 md:h-50"
                  />
                </div>
              </div>
              <div class="grid grid-rows-6 justify-start">
                <div class="row-span-2">
                  <LazyLoadImage
                    :img-path="images[1]?.path"
                    :blurry-img-path="images[1]?.blurryPath"
                    :alt-name="images[1]?.altText"
                    class="rounded-xl w-45 h-26 md:w-70 md:h-45"
                  />
                </div>
                <div class="row-span-4">
                  <LazyLoadImage
                    :img-path="images[3]?.path"
                    :blurry-img-path="images[3]?.blurryPath"
                    :alt-name="images[3]?.altText"
                    class="rounded-xl w-45 h-58 md:w-70 md:h-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </TransitionScroll>
      </div>
    </div>
  </div>
</template>
