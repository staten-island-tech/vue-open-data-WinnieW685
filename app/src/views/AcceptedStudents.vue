<template>
  <div><RouterLink to="/"> HomePage</RouterLink></div>
  <AcceptedChart></AcceptedChart>
</template>

<script setup>
import AcceptedChart from '@/components/AcceptedChart.vue'
import { reactive } from 'vue'
import { Bar } from 'vue-chartjs'
</script>

<style scoped></style>
