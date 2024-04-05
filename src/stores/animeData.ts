import { defineStore } from 'pinia'
import type { Anime } from '@/types/anime.type.ts'

export const useAnimeDataStore = defineStore('animeData', {
  state: () => ({
    data: <Anime[]> [
      {
        id: 1,
        title: 'Anime girl',
        url: 'youtube.com',
        img: './src/assets/images/img.jpg',
        isFav: true,
        rating: 'Safe'
      },
      {
        id: 2,
        title: 'Anime girl',
        url: 'youtube.com',
        img: './src/assets/images/img2.png',
        isFav: true,
        rating: 'Safe'
      },
      {
        id: 3,
        title: 'Anime girl',
        url: 'youtube.com',
        img: './src/assets/images/img3.jpg',
        isFav: false,
        rating: 'Safe'
      },
      {
        id: 4,
        title: 'Anime girl',
        url: 'youtube.com',
        img: './src/assets/images/img4.jpg',
        isFav: false,
        rating: 'NSFW'
      },
      {
        id: 5,
        title: 'Anime girl',
        url: 'youtube.com',
        img: './src/assets/images/img5.jpg',
        isFav: false,
        rating: 'NSFW'
      }
    ]
  }),
  actions: {

  }
})
