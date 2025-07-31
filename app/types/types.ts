// 👇 Individual data entry per response
export interface DataEntry {
  companySize: string
  industry: string
  quarter: string
  responseValue: string
  numResponses: number
}

// 👇 Structure of a question (e.g. Q1, Q2, Q3)
export interface Question {
  questionId: string
  questionNumber: number
  question: string
  questionType: string
  description: string
  data: DataEntry[]
}

// 👇 Overall dataset structure
export interface HubSpotData {
  metadata: {
    title: string
    description: string
  }
  uniqueValues: {
    companySize: string[]
    industry: string[]
    quarter: string[]
  }
  questions: Question[]
}

// 👇 Type for filter state
export interface FilterState {
  companySize: string[]
  industry: string[]
  quarter: string[]
}

// 👇 Type for processed chart data
export interface ChartData {
  labels: string[]
  values: number[]
  title: string
  subtitle?: string
}
