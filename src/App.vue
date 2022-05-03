<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
import counter from "./components/Counter";

export default {
  name: 'App',
  components: {counter},
  data() {
    return {}
  }
}
</script>
