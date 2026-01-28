<script setup lang="ts">
import 'iconify-icon'

import LogoAndSocialMedia from './FooterComponents/LogoAndSocialMedia.vue';
import PagesLinks from './FooterComponents/PagesLinks.vue';
import InstagramSection from './FooterComponents/InstagramSection.vue';
import SubscribeNewsletter from './FooterComponents/SubscribeNewsletter.vue';
</script>

<template>
  <div class="border-t border-neutral-300 bg-neutral-100">
    <div class="px-4 md:px-8 lg:max-w-317 lg:px-6 lg:mx-auto">
      <div class="py-20 lg:py-30">
        <div class="grid grid-cols-1">
          <!-- Logo and social media icons -->
          <div>
            <LogoAndSocialMedia />
            <div class="grid md:grid-cols-5">
              <PagesLinks class="md:col-span-2"/>
              <InstagramSection class="md:col-span-3"/>
            </div>
            <SubscribeNewsletter />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
