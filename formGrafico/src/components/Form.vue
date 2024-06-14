<template>
    <form @submit.prevent="handleSubmit">
        <div v-for="(value, index) in formData" :key="index">
            <label :for="'label' + index">{{ value.name }}</label>
            <input :id="'label' + index" type="number" v-model.number="value.value" required />
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import { useChartStore } from '../stores'

export default {
    name: 'Form',
    setup() {
        const chartStore = useChartStore()

        const formData = chartStore.chartData.map((item) => ({
            name: item.name,
            value: item.value,
        }))

        const handleSubmit = () => {
            const newChartData = formData.map((item) => ({
                name: item.name,
                value: item.value,
            }))
            chartStore.updateChartData(newChartData)
        }

        return {
            formData,
            handleSubmit,
        }
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}

div {
    margin-bottom: 10px;
}

label {
    margin-right: 10px;
}

input {
    width: 100%;
}

button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>