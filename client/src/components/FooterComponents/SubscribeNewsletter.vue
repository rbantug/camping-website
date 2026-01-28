<script setup lang="ts">
import 'iconify-icon'
import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue';
</script>

<template>
    <div class="flex flex-col">
        <!-- mail icon and text -->
        <div class="flex flex-col md:flex-row gap-y-4 md:gap-x-4 mb-4">
            <div class="h-15 w-15 bg-accent-outline rounded-full flex items-center justify-center">
                <iconify-icon icon="fluent:mail-copy-32-regular" height="40" width="40" class="text-accent-primary"/>
            </div>
            <div class="flex flex-col justify-center gap-y-2">
                <h3 class="font-semibold">Subscribe to our newsletter</h3>
                <p class="text-neutral-600">Stay updated with the newest camps</p>
            </div>
        </div>
        <div class="md:grid md:grid-cols-9 md:gap-x-4">
            <!-- input field -->
            <input type="text" placeholder="Enter your email" class="rounded-full w-full py-4 pl-6 mb-4 border-0 inset-shadow-sm shadow-lg focus:ring focus:ring-accent-secondary md:col-span-7"/>
            <!-- btn -->
            <PrimaryButton size="large" label="Subscribe" class="md:col-span-2"/>
        </div>
    </div>
</template>