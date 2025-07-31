<script setup lang="ts">
import { ref, computed } from 'vue'
import FilterPanel from '@/components/FilterPanel.vue'
import ChartComponent from '@/components/ChartComponent.vue'
import { useHubSpotData } from '~/composables/useHubSpotData'
import type { FilterState } from '~/types/types'

const { processChartData, uniqueValues } = useHubSpotData()

const questionId = ref<'q1' | 'q2' | 'q3'>('q1')

const selectedFilters = ref<FilterState>({
  companySize: [],
  industry: [],
  quarter: [],
})

const chartData = computed(() => processChartData(questionId.value, selectedFilters.value))
</script>

<template>
  <head>
    <title>Hubspot Dashboard</title>
  </head>
  <div class="container">
    <section class="title-row">
  <h1>HubSpot Evaluation Dashboard</h1>
  <NuxtLink to="/about" class="nav-link">About</NuxtLink>
</section>

    <FilterPanel
      :filters="selectedFilters"
      :options="uniqueValues"
      @update:filters="selectedFilters = $event"
    />

    <div v-if="!chartData.labels.length" class="no-data">
      No data matches your filter selections.
    </div>
    <ChartComponent v-else :chartData="chartData" />
  </div>
</template>
