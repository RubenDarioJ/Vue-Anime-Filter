<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { RouterView } from 'vue-router'

const images = ref<Object>([
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
])

const imageCopy = ref([{ ...images }])
console.log(imageCopy)

const filter = ref({
  filterById(userId) {
    const filteredDataById = images.value.findIndex((user) => user.id === userId)
    console.log(filteredDataById)
    images.value.splice(filteredDataById, 1)
  },
  filterNSFW(rating) {
    images.value = images.value.filter((element) => {
      return element.rating === rating
    })
    toggleNSFWVisibility()
  },
  changeColor(image) {
    image.isFav = !image.isFav
  }
})

const showNSFW = ref<boolean>(true)

const toggleNSFWVisibility = () => {
  showNSFW.value = !showNSFW.value
}
</script>

<template>
  <div>
    <ul>
      <button class="NSFWFilter" @click="filter.filterNSFW('Safe')">
        {{ showNSFW ? 'Filtrar NSFW' : 'Mostrar NSFW' }}
      </button>
      <!-- <button class="displayNSFW">Display NSFW</button> -->
      <li
        v-for="image in images"
        v-bind:class="{ fav: image.isFav }"
        @click="filter.changeColor(image)"
      >
          <RouterLink to="/info">
            <img :src="image.img" alt="" />
          </RouterLink>
        <p>{{ image.title }}</p>
        <p>{{ image.rating }}</p>
        <button @click="filter.filterById(image.id)">Borrar</button>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

img {
  background-color: #333;
  object-fit: cover;
  width: 150px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.7s;
}

button {
  cursor: pointer;
  background-color: #ffff00;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  touch-action: manipulation;
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

li.fav {
  background-color: grey;
}
</style>
