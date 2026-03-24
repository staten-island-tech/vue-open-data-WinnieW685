<template>
  <div>
    <!-- <div><RouterLink to="/search"></RouterLink></div> -->
    <h1>SHSAT by Schools (2022)</h1>

    <h2>Search Schools by name</h2>
    <div class="container">
      <SchoolCards v-for="school in schools" :key="school.feeder_school_dbn" :school="school">
      </SchoolCards>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue' //watch used to run function
import SchoolCards from '@/components/SchoolCards.vue'
import { useRoute } from 'vue-router'
const schools = ref(null)
async function getSchool() {
  const response = await fetch(
    `https://data.cityofnewyork.us/resource/k8ah-28f4.json?$limit=683&$offset=800`,
  )
  const data = await response.json()
  console.log(data)
  schools.value = data
}
getSchool()
// const route = useRoute()
onMounted(() => {
  getSchool()
})
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 2px black;
}
.card {
  background-color: rgb(227, 242, 255);
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
