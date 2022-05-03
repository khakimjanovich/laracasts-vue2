<template>
  <div id="app">
    <ul>
      <li v-for="skill in skills" v-text="skill"></li>
    </ul>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      skills: []
    }
  },
  mounted() {
    this.$http.get('/skills').then(response => this.skills = response.data)
  }
}
</script>
