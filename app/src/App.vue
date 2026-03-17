<template>
  <div>
    <h1>SHSAT by Schools</h1>
    <h2>Search Schools by name</h2>
    
    </div>
</div></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue' //watch used to run function
import { useRoute } from 'vue-router'
const schools = ref(null)
async function getSchool() {
  const response = await fetch(`https://data.cityofnewyork.us/resource/k8ah-28f4.json`)
  const data = await response.json()
  console.log(data)
  schools.value = data
}
getSchool()
const route = useRoute()
</script>

<style scoped></style>
