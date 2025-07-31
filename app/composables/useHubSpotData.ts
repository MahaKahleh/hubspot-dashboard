import hubspotData from '../../public/data.json'
import type { HubSpotData, Question, FilterState, ChartData } from '~/types/types'

// 📊 This composable handles filtering and processing the chart data
export function useHubSpotData() {
  const data: HubSpotData = hubspotData as HubSpotData

  const getQuestionById = (id: 'q1' | 'q2' | 'q3'): Question => {
    return data.questions.find((q) => q.questionId === id)!
  }

  const processChartData = (questionId: 'q1' | 'q2' | 'q3', filters: FilterState): ChartData => {
    const question = getQuestionById(questionId)

    const filtered = question.data.filter((entry) =>
      (!filters.companySize.length || filters.companySize.includes(entry.companySize)) &&
      (!filters.industry.length || filters.industry.includes(entry.industry)) &&
      (!filters.quarter.length || filters.quarter.includes(entry.quarter))
    )

    const responseMap: Record<string, number> = {}
    filtered.forEach((entry) => {
      responseMap[entry.responseValue] = (responseMap[entry.responseValue] || 0) + entry.numResponses
    })

    const sorted = Object.entries(responseMap).sort((a, b) => b[1] - a[1])

    return {
      labels: sorted.map(([label]) => label),
      values: sorted.map(([, value]) => value),
      title: question.question,
      subtitle: buildSubtitle(filters),
    }
  }

  const buildSubtitle = (filters: FilterState): string => {
    const parts = []
    if (filters.companySize.length) parts.push(`Company: ${filters.companySize.join(', ')}`)
    if (filters.industry.length) parts.push(`Industry: ${filters.industry.join(', ')}`)
    if (filters.quarter.length) parts.push(`Quarter: ${filters.quarter.join(', ')}`)
    return parts.length ? parts.join(' | ') : 'All Data'
  }

  return {
    getQuestionById,
    processChartData,
    metadata: data.metadata,
    uniqueValues: data.uniqueValues,
  }
}
