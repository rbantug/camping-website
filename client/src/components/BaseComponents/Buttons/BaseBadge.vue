<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue';

const props = defineProps({
  name: {
    type: String,
    requried: true,
    default: 'test',
  },
})

const badgeIcons = ref({
  toilet: { icon: 'fluent:toilet-20-regular', text: 'Toilets' },
  shower: { icon: 'cil:shower', text: 'Showers' },
  picnicTable: { icon: 'fluent:table-picnic-16-regular', text: 'Picnic Tables' },
  firePit: { icon: 'hugeicons:fire-pit', text: 'Fire Pit' },
  grill: { icon: 'mdi:grill-outline', text: 'Barbeque Grill' },
  trashBins: { icon: 'tabler:trash', text: 'Trash Bins' },
  waterSupply: { icon: 'lucide-lab:faucet', text: 'Water Supply' },
  electicHookup: { icon: 'ph:plug-charging', text: 'Electric Hookup' },
  wifiAccess: { icon: 'material-symbols:wifi', text: 'WIFI Access' },
  campStore: { icon: 'material-symbols:store-outline', text: 'Camp Store' },
  test: { icon: 'iconoir:light-bulb', text: 'test' },
})
</script>

<template>
  <div class="w-fit px-3 py-2 rounded-3xl border border-neutral-300 flex items-center gap-x-1">
    <Icon :icon="badgeIcons[props.name]['icon']" height="24" width="24" class="p-0" />
    <div class="pr-1 text-sm">{{ badgeIcons[props.name]['text'] }}</div>
  </div>
</template>
