<template>
  <div><h1>SHSAT by Schools</h1></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue' //watch used to run function
import { useRoute } from 'vue-router'
const schools = ref(null)
async function getSchool(id) {
  const response = await fetch(`https://data.cityofnewyork.us/resource/k8ah-28f4.json`)
  const data = await response.json()
  schools.value = data
}
</script>

<style scoped></style>
