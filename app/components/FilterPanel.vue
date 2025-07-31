<script setup lang="ts">
import type { FilterState } from '~/types/types'

const props = defineProps<{
  filters: FilterState
  options: {
    companySize: string[]
    industry: string[]
    quarter: string[]
  }
}>()

const emit = defineEmits(['update:filters'])

const updateFilter = (key: keyof FilterState, value: string) => {
  const updated = [...props.filters[key]]
  const index = updated.indexOf(value)

  if (index > -1) updated.splice(index, 1)
  else updated.push(value)

  emit('update:filters', { ...props.filters, [key]: updated })
}
</script>

<template>
  <div class="filters">
    <!-- Company Size -->
    <div class="filter-group">
      <h3>Company Size</h3>
      <div v-for="option in options.companySize" :key="option" class="checkbox">
        <input
          type="checkbox"
          :id="option"
          :value="option"
          :checked="filters.companySize.includes(option)"
          @change="updateFilter('companySize', option)"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </div>

    <!-- Industry -->
    <div class="filter-group">
      <h3>Industry</h3>
      <div v-for="option in options.industry" :key="option" class="checkbox">
        <input
          type="checkbox"
          :id="option"
          :value="option"
          :checked="filters.industry.includes(option)"
          @change="updateFilter('industry', option)"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </div>

    <!-- Quarter -->
    <div class="filter-group">
      <h3>Quarter</h3>
      <div v-for="option in options.quarter" :key="option" class="checkbox">
        <input
          type="checkbox"
          :id="option"
          :value="option"
          :checked="filters.quarter.includes(option)"
          @change="updateFilter('quarter', option)"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </div>
  </div>
</template>