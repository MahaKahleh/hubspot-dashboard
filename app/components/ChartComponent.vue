<template>
  <div class="chart-container">
    <canvas v-if="hasData" ref="canvasRef"></canvas>
    <p v-else class="no-data">No data matches your filters.</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref, computed } from 'vue'
import Chart from 'chart.js/auto'
import type { ChartData as ChartJSData } from 'chart.js'

const props = defineProps<{
  chartData: {
    labels: string[],
    values: number[],
    title: string,
    subtitle?: string,
  }
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

const hasData = computed(() => props.chartData.values.length > 0)

const createChart = () => {
  if (!canvasRef.value) return

  if (chartInstance) {
    chartInstance.destroy()
  }

  const data: ChartJSData = {
    labels: props.chartData.labels,
    datasets: [{
      label: props.chartData.subtitle,
      data: props.chartData.values,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }],
  }

  chartInstance = new Chart(canvasRef.value, {
    type: 'bar',
    data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: props.chartData.title,
          font: { size: 18 },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    },
  })
}

onMounted(createChart)
watch(() => props.chartData, createChart)
</script>
