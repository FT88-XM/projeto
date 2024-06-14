<template>
    <div class="container mt-4">
      <div class="mb-3">
        <label for="textResponse" class="form-label">{{ label }}</label>
        <textarea
          id="textResponse"
          class="form-control"
          rows="5"
          v-model="response"
          :placeholder="placeholder"
        ></textarea>
      </div>
      <button class="btn btn-primary" @click="submitResponse">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextResponse',
    props: {
      label: {
        type: String,
        default: 'Your Response',
      },
      placeholder: {
        type: String,
        default: 'Type your answer here...',
      },
    },
    data() {
      return {
        response: '',
      }
    },
    methods: {
      submitResponse() {
        this.$emit('submit', this.response)
        this.response = ''
      },
    },
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>
  