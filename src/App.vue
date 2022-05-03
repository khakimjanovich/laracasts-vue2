<template>
  <div id="app">
    <message>Hello there</message>
    <message>HI again</message>
  </div>
</template>

<script>
import message from "./components/Message";

export default {
  name: 'App',
  components: {message},
  data() {
    return {}
  }
}
</script>
