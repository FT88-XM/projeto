<template>
  <div id="app">
    <div>
    <Form />
    <PieChart />
  </div>


    <TextResponse/>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import PieChart from './components/PieChart.vue'
import TextResponse from './components/TextResponse.vue'


export default {
  name: 'App',
  components: {
    Form,
    PieChart,TextResponse
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
