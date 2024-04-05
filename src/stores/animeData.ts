import { defineStore } from 'pinia'
import type { Anime } from '@/types/anime.type.ts'

export const useAnimeDataStore = defineStore('animeData', {
  state: () => ({
    showingNSFW: true,
    data: <Anime[]> [
      {
        id: 1,
        title: 'Anime girl',
        url: 'youtube.com',
        img: 'img.jpg',
        isFav: true,
        rating: 'Safe',
        show: true
      },
      {
        id: 2,
        title: 'Anime girl',
        url: 'youtube.com',
        img: 'img2.png',
        isFav: true,
        rating: 'Safe',
        show: true
      },
      {
        id: 3,
        title: 'Anime girl',
        url: 'youtube.com',
        img: 'img3.jpg',
        isFav: false,
        rating: 'Safe',
        show: true
      },
      {
        id: 4,
        title: 'Anime girl',
        url: 'youtube.com',
        img: 'img4.jpg',
        isFav: false,
        rating: 'NSFW',
        show: true
      },
      {
        id: 5,
        title: 'Anime girl',
        url: 'youtube.com',
        img: 'img5.jpg',
        isFav: false,
        rating: 'NSFW',
        show: true
      }
    ]
  }),
  actions: {
    removeItem(id: number | undefined) {
      if (!id) {
        return false
      }

      const index = this.data.findIndex((anime) => anime.id === id)
      this.data.splice(index, 1)
    },
    toggleNSFWItems() {
      this.data.map((anime) => {
        if (anime.rating === 'NSFW') {
          anime.show = !anime.show
        }
      })

      this.showingNSFW = !this.showingNSFW
    },
    toggleItemFav(id: number | undefined) {
      if (!id) {
        return false
      }

      const index = this.data.findIndex((anime) => anime.id === id)
      this.data[index].isFav = !this.data[index].isFav
    },
    getItem(id: number) {
      return this.data.find((anime) => anime.id === id)
    }
  }
})
