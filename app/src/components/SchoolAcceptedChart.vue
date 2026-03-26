<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script>
// DataPage.vue

import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'PieChart',
  components: { Pie },
  computed: {
    chartData() {
      return /* mutable chart data */
    },
    chartOptions() {
      return /* mutable chart options */
    },
  },
}
</script>

<style lang="scss" scoped></style>
