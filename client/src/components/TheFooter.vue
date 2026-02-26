<script setup lang="ts">
import LogoAndSocialMedia from './FooterComponents/LogoAndSocialMedia.vue'
import PagesLinks from './FooterComponents/PagesLinks.vue'
import InstagramSection from './FooterComponents/InstagramSection.vue'
import SubscribeNewsletter from './FooterComponents/SubscribeNewsletter.vue'
import TransitionScroll from './util/TransitionScroll.vue'
</script>

<template>
  <div
    class="border-t border-neutral-300 bg-neutral-100 dark:bg-neutral-700 transition-color duration-300"
  >
    <div class="px-4 md:px-8 lg:max-w-317 lg:px-6 lg:mx-auto">
      <div class="py-20 lg:py-30">
        <div class="grid grid-cols-1">
          <TransitionScroll transition-direction="top-bottom" threshold>
            <!-- Logo and social media icons -->
            <div class="lg:grid lg:grid-cols-6 lg:gap-x-6 lg:pb-12">
              <LogoAndSocialMedia class="lg:col-span-2" />
              <div class="grid md:grid-cols-6 lg:grid-cols-6 lg:col-span-4">
                <PagesLinks class="md:col-span-2" />
                <InstagramSection class="md:col-span-4 lg:col-span-3" />
              </div>
            </div>
          </TransitionScroll>
          <TransitionScroll>
            <SubscribeNewsletter />
          </TransitionScroll>
        </div>
      </div>
    </div>
  </div>
</template>
