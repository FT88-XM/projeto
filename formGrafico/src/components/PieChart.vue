<template>
    <div>
      <v-chart :option="chartOptions" style="width: 600px; height: 400px;"></v-chart>
    </div>
  </template>
  
  <script>
  import { defineComponent, computed } from 'vue'
  import { useChartStore } from '../stores'
  import VChart from 'vue-echarts'
  import { use } from 'echarts/core'
  import { PieChart } from 'echarts/charts'
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
  import { CanvasRenderer } from 'echarts/renderers'
  
  use([PieChart, TitleComponent, TooltipComponent, LegendComponent, CanvasRenderer])
  
  export default defineComponent({
    name: 'PieChart',
    components: {
      VChart,
    },
    setup() {
      const chartStore = useChartStore()
  
      const chartOptions = computed(() => ({
        title: {
          text: 'Gráfico de Pizza',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: 'Acessos',
            type: 'pie',
            radius: '50%',
            data: chartStore.chartData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }))
  
      return {
        chartOptions,
      }
    },
  })
  </script>
  
  <style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  </style>
  