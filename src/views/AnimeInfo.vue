<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useAnimeDataStore } from '@/stores/animeData'

const animeDataStore = useAnimeDataStore()

const route = useRoute()
const router = useRouter()

const animeId = <string> route.params.id

const anime = animeDataStore.getItem(Number(animeId))
</script>

<template>
  <div class="d-flex" v-bind:class="{ fav: anime?.isFav }">
    <img :src="`./../../src/assets/images/${anime?.img}`" :alt="anime?.title" />
    <p>{{ anime?.title }}</p>
    <p>{{ anime?.rating }}</p>
    <button @click="animeDataStore.toggleItemFav(anime?.id)">Favorito</button>
    <button @click="animeDataStore.removeItem(anime?.id), router.go(-1)">Borrar</button>
  </div>
</template>
