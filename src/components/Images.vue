<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAnimeDataStore } from '@/stores/animeData'

const animeDataStore = useAnimeDataStore()
</script>

<template>
  <div>
    <button class="NSFWFilter" @click="animeDataStore.toggleNSFWItems()">
      {{ animeDataStore.showingNSFW ? 'Filtrar NSFW' : 'Mostrar NSFW' }}
    </button>

    <ul style="padding-left: 0;">
      <li
        v-for="anime in animeDataStore.data.filter((anime) => anime.show)"
        v-bind:class="{ fav: anime.isFav }"
        class="d-flex"
      >
        <RouterLink :to="`/anime/${anime.id}`">
          <img :src="`./src/assets/images/${anime.img}`" :alt="anime.title" />
        </RouterLink>
        <p>{{ anime.title }}</p>
        <p>{{ anime.rating }}</p>
        <button @click="animeDataStore.toggleItemFav(anime.id)">Favorito</button>
        <button @click="animeDataStore.removeItem(anime.id)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  list-style-type: none;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
}

.NSFWFilter {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
}

.displayNSFW {
  display: block;
  margin: 0 auto;
}
</style>
