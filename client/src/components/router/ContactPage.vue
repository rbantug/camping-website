<script setup lang="ts">
import ContactDetails from '../ContactPageComponents/ContactDetails.vue';
import FrequentlyAskedQuestions from '../ContactPageComponents/FrequentlyAskedQuestions.vue';
import TheForm from '../ContactPageComponents/TheForm.vue';
import TopTitle from '../ContactPageComponents/TopTitle.vue';

</script>

<template>
    <!-- width percentages are mobile: 90%, tablet: 80%, desktop: 70%  -->
    <div class="bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
        <div class="h-fit">
            <TopTitle />
            <div class="relative">
                <TheForm />
                <ContactDetails />
            </div>
            <FrequentlyAskedQuestions />
        </div>
    </div>
</template>