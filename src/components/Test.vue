<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  title: String
})

// const nameInputRef = ref<HTMLInputElement | null>(null);

// const handleClick = () => {
//   if (nameInputRef.value) {
//     console.log(nameInputRef.value.value);
//   }
// };

const ahorros = ref<number>(500)

const sumar = (cantidad: number) => {
  ahorros.value += cantidad
  console.log(ahorros)
}
const restar = (cantidad: number) => {
  ahorros.value -= cantidad
  console.log(ahorros)
}
</script>

<template>
  <h1>{{ title }}</h1>
  <h2 :class="ahorros >= 1000 ? 'positive' : ahorros === 0 ? 'negative' : ''">
    Ahorros: {{ ahorros }}
  </h2>
  <button @click="restar(100)" :disabled="ahorros <= 0">Restar</button>
  <button @click="sumar(100)" :disabled="ahorros >= 1000">Sumar</button>
  <!-- <input type="text" ref="name" v-model="nameInputRef" />
  <button @click="handleClick">Click me</button> -->
</template>

<style scoped>
.negative {
  color: red;
}

.positive {
  color: green;
}

button {
  background-color: #fff000;
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
  margin-right: 10px;
}

button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #515151;
}
</style>
