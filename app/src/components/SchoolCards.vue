<template>
  <div>
    <h1>{{ school.feeder_school_name }}</h1>
    <h2>Test Takers: {{ school.count_of_testers }}</h2>
    <h2>Accepted: {{ school.number_of_offers }}</h2>
  </div>
</template>

<script setup>
defineProps({
  school: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
h1 {
  font-size: medium;
}
h2 {
  font-size: small;
}
div {
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(218, 238, 255);
  border-radius: 6px;
}
</style>
