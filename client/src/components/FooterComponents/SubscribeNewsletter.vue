<script setup lang="ts">
import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue';
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-5">
        <!-- mail icon and text -->
        <div class="flex flex-col md:flex-row gap-y-4 md:gap-x-4 mb-4 lg:col-span-2">
            <div class="h-15 w-15 bg-accent-outline rounded-full flex items-center justify-center lg:h-18 lg:w-18">
                <!-- fluent:mail-copy-32-regular -->
                <div class="text-accent-primary lg:scale-125">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M6 9.5A4.5 4.5 0 0 1 10.5 5h15A4.5 4.5 0 0 1 30 9.5v10a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 6 19.5zm2-.054l10 5.417l10-5.417A2.5 2.5 0 0 0 25.5 7h-15A2.5 2.5 0 0 0 8 9.446m20 2.274l-9.524 5.16a1 1 0 0 1-.953 0L8 11.72v7.78a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5zM2 13.5c0-1.56.794-2.935 2-3.742V19.5a6.5 6.5 0 0 0 6.5 6.5h14.742a4.5 4.5 0 0 1-3.742 2h-11A8.5 8.5 0 0 1 2 19.5z"/></svg>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-y-2">
                <h3 class="text-black font-semibold md:text-xl dark:text-neutral-200">Subscribe to our newsletter</h3>
                <p class="text-neutral-600 md:text-lg dark:text-neutral-500">Stay updated with the newest camps</p>
            </div>
        </div>
        <div class="md:grid md:grid-cols-9 md:gap-x-4 lg:col-span-3 md:items-center">
            <!-- input field -->
            <input type="email" placeholder="Enter your email" class="rounded-full w-full py-4 pl-6 mb-4 border-0 inset-shadow-sm shadow-lg focus:ring-2 focus:ring-accent-secondary md:mb-0 md:col-span-7 lg:col-start-4 lg:col-end-8 lg:mb-0 dark:bg-neutral-500 dark:ring-2 dark:ring-neutral-200 dark:placeholder:text-neutral-200 dark:shadow-none"/>
            <!-- btn -->
            <PrimaryButton size="large" label="Subscribe" class="md:col-span-2"/>
        </div>
    </div>
</template>