import { defineStore } from 'pinia'

export const useChartStore = defineStore('chart', {
  state: () => ({
    chartData: JSON.parse(localStorage.getItem('chartData')) || [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' },
    ],
  }),
  actions: {
    updateChartData(data) {
      this.chartData = data
      localStorage.setItem('chartData', JSON.stringify(data))
    },
  },
})
