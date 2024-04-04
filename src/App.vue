<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MoneyComponent from './components/Money.vue'
import ImageComponent from './components/Images.vue'
import Info from './components/Image-info.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>
  <h1>
    <MoneyComponent title="Hola, es Ruben Dario" />
  </h1>
  <h2>
    <ImageComponent />
  </h2>
</template>

<style>

</style>
