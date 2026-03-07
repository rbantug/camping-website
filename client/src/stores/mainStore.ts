import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type { Camps } from '../../interface.ts'

export const useMainStore = defineStore('main', () => {
  const allPages = ref([
    { link: 'Home', route: 'home' },
    { link: 'About', route: 'about' },
    { link: 'Contact', route: 'contact' },
    { link: 'Camps', route: 'camps' },
    { link: 'Login/Register', route: 'auth' },
  ])

  const getAllPages = computed(() => allPages)

  const allCamps = ref<Camps[]>([
    {
      name: 'Quiet Ember Campground',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        "Quiet Ember Campground is a tucked-away forest retreat where slow mornings and crackling campfires set the pace. Surrounded by tall pines, soft moss trails, and the distant sound of a flowing creek, it's a place designed for people who come to the woods to truly unplug. Evenings glow with lantern light and warm embers, while the night sky opens wide above the treetops.",
      price: '12',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/b1w3ybugfyq8c9thb0si1/forest-1.avif?rlkey=gd4vdo8y30jpj3ics9uecxevd',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/18wqydf0v7hu4i1tgldn7/forest-1.avif?rlkey=8kkubpmzyj0twcrc7yrapgmc7',
      status: 'available',
      amenities: ['toilet', 'firePit', 'waterSupply', 'campStore'],
    },
    {
      name: 'Cedar Ridge Outpost',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'Nestled deep within a tranquil pine forest, Quiet Ember Campground offers peaceful campsites surrounded by tall trees and glowing evening campfires. Perfect for hikers, stargazers, and anyone looking to unplug from the noise of the city.',
      price: '34',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/mlej6lktl7222u7yqt8xr/forest-2.avif?rlkey=c3kttwp5119rt1wu940hakfno',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/7meuc2pir0mtsjp1e92lr/forest-2.avif?rlkey=ueavpt1nftp432cw20632jyy9',
      status: 'full',
      amenities: ['grill', 'trashBins', 'picnicTable'],
    },
    {
      name: 'Breakline Beach Camp',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'Set along a stretch of warm sandy coastline, Golden Dune Beach Camp combines ocean breezes with scenic sunset views. Fall asleep to the sound of waves and wake up to long beach walks and salty air.',
      price: '56',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/xt0kr8kv85bgerfk6ohhh/beach-1.avif?rlkey=sxkf3kr4xdxze5byzvvzkb0ug',
      blurryImg: '/client/src/assets/images/lowres/beach-1.avif',
      status: 'available',
      amenities: ['shower', 'waterSupply', 'wifiAccess'],
    },
    {
      name: 'Highpass Outpost',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'Perched high in the mountains, Silver Ridge offers breathtaking panoramic views and crisp alpine air. Ideal for adventurous campers seeking scenic trails, cool evenings, and spectacular sunrises.',
      price: '78',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/s8q8u7tnnudy8j6ed5z75/mountain-1.avif?rlkey=u8724riknpoc464vekmk3xgqe',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/5tkk1iht2isx7rqxwaroq/mountain-1.avif?rlkey=16v6idbvlocetszbq3hbuhw2g',
      status: 'available',
      amenities: ['shower', 'waterSupply', 'wifiAccess'],
    },
    {
      name: 'North Summit Camp',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'Overlooking distant snowcapped peaks, Snowcap Vista Camp offers breathtaking views, cool mountain nights, and some of the best stargazing opportunities in the region.',
      price: '90',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/bxicpr9ysg35d6gc8cwh5/mountain-2.avif?rlkey=k0c890ridekn13qfgwi9j2ft7',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/vvzdhi7m7cj8duk3qv14f/mountain-2.avif?rlkey=njz2ki0bnp6kepnev06rkisho',
      status: 'available',
      amenities: ['grill', 'trashBins', 'picnicTable'],
    },
    {
      name: 'Cloudrest Campground',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'High above the tree line, Cloudbreak Mountain Camp offers a truly unique camping experience where clouds drift below the surrounding peaks.',
      price: '14',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/apars1hjdyqr5efk8myps/mountain-3.avif?rlkey=8dhggk1z3p0qevjgvig0a8w31',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/j9opfda1c2szjcdq5qbeo/mountain-3.avif?rlkey=qwwery67yeedwvwd8wzglhx0u',
      status: 'available',
      amenities: ['grill', 'trashBins', 'picnicTable'],
    },
  ])

  const getAllCamps = computed(() => allCamps)
  return { getAllPages, getAllCamps }
})
