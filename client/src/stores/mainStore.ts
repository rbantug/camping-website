import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type { Camps } from '../../interface.ts'

export const useMainStore = defineStore('main', () => {
  const allPages = ref([
    { link: 'Home', route: '/home' },
    { link: 'About', route: '/about' },
    { link: 'Contact', route: '/contact' },
    { link: 'Camps', route: '/camps' },
    { link: 'Login/Register', route: '/auth' },
  ])

  const getAllPages = computed(() => allPages)

  const allCamps = ref<Camps[]>([
    {
      name: 'Quiet Ember Campground',
      slug: 'quiet-ember-campground',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        "Quiet Ember Campground is a tucked-away forest retreat where slow mornings and crackling campfires set the pace. Surrounded by tall pines, soft moss trails, and the distant sound of a flowing creek, it's a place designed for people who come to the woods to truly unplug. Evenings glow with lantern light and warm embers, while the night sky opens wide above the treetops.",
      price: '12',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/b1w3ybugfyq8c9thb0si1/forest-1.avif?rlkey=gd4vdo8y30jpj3ics9uecxevd',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/18wqydf0v7hu4i1tgldn7/forest-1.avif?rlkey=8kkubpmzyj0twcrc7yrapgmc7',
      imageHires:
        'https://dl.dropboxusercontent.com/scl/fi/l3s8l6u0j19a93wdywxgh/hires-forest-1.avif?rlkey=mrj6akvq95gspe66y5zcsb6zb',
      status: 'available',
      amenities: ['toilet', 'firePit', 'waterSupply', 'campStore', 'electicHookup', 'wifiAccess'],
      category: 'forest'
    },
    {
      name: 'Cedar Ridge Outpost',
      slug: 'cedar-ridge-outpost',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'Nestled deep within a tranquil pine forest, Quiet Ember Campground offers peaceful campsites surrounded by tall trees and glowing evening campfires. Perfect for hikers, stargazers, and anyone looking to unplug from the noise of the city.',
      price: '34',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/mlej6lktl7222u7yqt8xr/forest-2.avif?rlkey=c3kttwp5119rt1wu940hakfno',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/7meuc2pir0mtsjp1e92lr/forest-2.avif?rlkey=ueavpt1nftp432cw20632jyy9',
      imageHires:
        'https://dl.dropboxusercontent.com/scl/fi/dteu6o8d6e6079mihkmx5/hires-forest-2.avif?rlkey=vqc62pt044jm7awa1uciq4tin',
      status: 'full',
      amenities: ['grill', 'trashBins', 'picnicTable'],
      category: 'forest'
    },
    {
      name: 'Breakline Beach Camp',
      slug: 'breakline-beach-camp',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'Set along a stretch of warm sandy coastline, Golden Dune Beach Camp combines ocean breezes with scenic sunset views. Fall asleep to the sound of waves and wake up to long beach walks and salty air.',
      price: '56',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/xt0kr8kv85bgerfk6ohhh/beach-1.avif?rlkey=sxkf3kr4xdxze5byzvvzkb0ug',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/3zr9owlo3pctzyvmnwj6f/beach-1.avif?rlkey=9btuwb6kzbtyhufqw3ulod6sw',
      imageHires:
        'https://dl.dropboxusercontent.com/scl/fi/a40cgsn5cuvdeapgi8ohj/hires-beach-1.avif?rlkey=i6dkleh49deuxmgi1r9gslvqb',
      status: 'available',
      amenities: ['shower', 'waterSupply', 'wifiAccess'],
      category: 'beach'
    },
    {
      name: 'Highpass Outpost',
      slug: 'highpass-outpost',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'Perched high in the mountains, Silver Ridge offers breathtaking panoramic views and crisp alpine air. Ideal for adventurous campers seeking scenic trails, cool evenings, and spectacular sunrises.',
      price: '78',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/s8q8u7tnnudy8j6ed5z75/mountain-1.avif?rlkey=u8724riknpoc464vekmk3xgqe',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/5tkk1iht2isx7rqxwaroq/mountain-1.avif?rlkey=16v6idbvlocetszbq3hbuhw2g',
      imageHires:
        'https://dl.dropboxusercontent.com/scl/fi/piohy8uw9pqniy8xph5tf/hires-mountain-1.avif?rlkey=trsox280q72272xg6ikc5onpo',
      status: 'available',
      amenities: ['shower', 'waterSupply', 'wifiAccess'],
      category: 'mountain'
    },
    {
      name: 'North Summit Camp',
      slug: 'north-summit-camp',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'Overlooking distant snowcapped peaks, Snowcap Vista Camp offers breathtaking views, cool mountain nights, and some of the best stargazing opportunities in the region.',
      price: '90',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/bxicpr9ysg35d6gc8cwh5/mountain-2.avif?rlkey=k0c890ridekn13qfgwi9j2ft7',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/vvzdhi7m7cj8duk3qv14f/mountain-2.avif?rlkey=njz2ki0bnp6kepnev06rkisho',
      imageHires:
        'https://dl.dropboxusercontent.com/scl/fi/g3jpy3n5lec9m6wj3hmmx/hires-mountain-2.avif?rlkey=o3qsk6dp95l3g5dl36j4s9lqd',
      status: 'available',
      amenities: ['grill', 'trashBins', 'picnicTable'],
      category: 'mountain'
    },
    {
      name: 'Cloudrest Campground',
      slug: 'cloudrest-campground',
      shortDescription: 'lorem something is flying over the chasm',
      fullDescription:
        'High above the tree line, Cloudbreak Mountain Camp offers a truly unique camping experience where clouds drift below the surrounding peaks.',
      price: '14',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/apars1hjdyqr5efk8myps/mountain-3.avif?rlkey=8dhggk1z3p0qevjgvig0a8w31',
      blurryImg:
        'https://dl.dropboxusercontent.com/scl/fi/j9opfda1c2szjcdq5qbeo/mountain-3.avif?rlkey=qwwery67yeedwvwd8wzglhx0u',
      imageHires:
        'https://dl.dropboxusercontent.com/scl/fi/fv1vpvq9pove2f4f38enm/hires-mountain-3.avif?rlkey=32o5cddvs5s2oa9v51oa2v25k',
      status: 'available',
      amenities: ['grill', 'trashBins', 'picnicTable'],
      category: 'mountain'
    },
  ])

  const galleryImage = {
    forest: [
      'https://dl.dropboxusercontent.com/scl/fi/xjqv33ygkw7ufaojeew9u/gallery-forest-1.avif?rlkey=u235ghlu0j347bhd7oi8ghlz9',
      'https://dl.dropboxusercontent.com/scl/fi/cwiacpde2wl5ekctpu1dk/gallery-forest-2.avif?rlkey=csqp1suwkxklrib6k0fhwzbdb',
      'https://dl.dropboxusercontent.com/scl/fi/hr22rispjiale36ucn3n5/gallery-forest-3.avif?rlkey=2dy29s1jnhmvf9d0v4cgez924',
      'https://dl.dropboxusercontent.com/scl/fi/m9cdbce6bixxcwxlhxgh0/gallery-forest-4.avif?rlkey=k2c939jaqk221j0pbv6s69hsi',
    ],
    beach: [
      'https://dl.dropboxusercontent.com/scl/fi/qe4h0j2g3gxiazaxvfgt4/gallery-beach-1.avif?rlkey=s0guh4nmofnsjnbjx30j2omz8',
      'https://dl.dropboxusercontent.com/scl/fi/5nfqmn5p3gvaxz1j7fzf1/gallery-beach-2.avif?rlkey=m6rmsid7galu56hposlvtvkot',
      'https://dl.dropboxusercontent.com/scl/fi/30l4lzm2ee9x8hj5parzt/gallery-beach-3.avif?rlkey=oj495y2pig4x1rq4fhd6hokn8',
      'https://dl.dropboxusercontent.com/scl/fi/0nwag30v0hg16wogqot2b/gallery-beach-4.avif?rlkey=w97z41xpkw94fpf2roxnyrlsd',
    ],
    mountain: [
      'https://dl.dropboxusercontent.com/scl/fi/2d04we4ywoi5i5dx8xkiu/gallery-mountain-1.avif?rlkey=obelhwb17doqjqwjb4im1jg9p',
      'https://dl.dropboxusercontent.com/scl/fi/rr00qne70aly5rlhqp1b6/gallery-mountain-2.avif?rlkey=ilt3h276crux7k21l6x21ckgi',
      'https://dl.dropboxusercontent.com/scl/fi/qoyqoua6j6bmelwva6e4s/gallery-mountain-3.avif?rlkey=50pcy4htsoz8gx186r67lrdse',
      'https://dl.dropboxusercontent.com/scl/fi/xl0h1wil0dsk3605p98hh/gallery-mountain-4.avif?rlkey=kbg8q9l6fe5v848xlwzg0kugg',
    ],
  }

  const galleryBlurryImg = {
    forest: [
      'https://dl.dropboxusercontent.com/scl/fi/bakzeginidsvunysekf4o/gallery-forest-1.avif?rlkey=4wcaelvoqmvgzus8kt62gnru2',
      'https://dl.dropboxusercontent.com/scl/fi/yuzuzuj6wan6kq9mfkrl4/gallery-forest-2.avif?rlkey=jdq17hhd5uxj9idbepavtcar0',
      'https://dl.dropboxusercontent.com/scl/fi/17mhvm493oltz3qamrfzt/gallery-forest-3.avif?rlkey=gojmenjbrja2c6g3jypfcsxkd',
      'https://dl.dropboxusercontent.com/scl/fi/6hkmh47zn6dadxwgq4evb/gallery-forest-4.avif?rlkey=sxq1jqeu5mgj1ogz6siwwvz2x',
    ],
    beach: [
      'https://dl.dropboxusercontent.com/scl/fi/czdt3vraejhqen1ekkoqu/gallery-beach-1.avif?rlkey=duadag72kr4aaj1i9oqk1rcp4',
      'https://dl.dropboxusercontent.com/scl/fi/df6p89jradyenho4366tb/gallery-beach-2.avif?rlkey=pyy8ehzcdiiopxbexyhqse0q8',
      'https://dl.dropboxusercontent.com/scl/fi/qk9148vo7grtoc02oyfwk/gallery-beach-3.avif?rlkey=qvw522w0kx1acqjre4g6qxvac',
      'https://dl.dropboxusercontent.com/scl/fi/2zoe5hojrnjmxxhd33os6/gallery-beach-4.avif?rlkey=vky81sj308b7s2mzcdm4yacvq',
    ],
    mountain: [
      'https://dl.dropboxusercontent.com/scl/fi/enhlrtl3j06zbn56m6h48/gallery-mountain-1.avif?rlkey=rd7yy36va5pm7w8iyi2dpntnr',
      'https://dl.dropboxusercontent.com/scl/fi/k1nplv05r2xqhdkgcxu1x/gallery-mountain-2.avif?rlkey=xhnj9dsuc99eykb0lplhbtcj4',
      'https://dl.dropboxusercontent.com/scl/fi/890d0uqnwtpn9ulwjy499/gallery-mountain-3.avif?rlkey=mxpeiyyme7ri4t12fr7rdy1p4',
      'https://dl.dropboxusercontent.com/scl/fi/vemxqs8lp1eg2hgbndl8d/gallery-mountain-4.avif?rlkey=hccz18p26s6gg8jpu2z1ltcy9',
    ],
  }

  const getAllCamps = computed(() => allCamps)

  const darkMode = ref(false)
  function updateDarkMode(val: boolean) {
    darkMode.value = val
  }
  const getDarkMode = computed(() => darkMode.value)

  // This is the window.screenY where the scrollUpButton will appear
  const bottomRightBtnY = ref(0)
  function updateBottomRightY(val: number) {
    bottomRightBtnY.value = val
  }
  const getBottomRightBtnY = computed(() => bottomRightBtnY)

  return {
    getAllPages,
    getAllCamps,
    updateDarkMode,
    getDarkMode,
    updateBottomRightY,
    getBottomRightBtnY,
    galleryImage,
    galleryBlurryImg,
  }
})
