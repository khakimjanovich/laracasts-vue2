<template>
  <div class="box is-info">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "Message"
}
</script>

<style scoped>
.box {
  background: gray;
  padding: 10px;
  margin: 10px;
  border: 1px solid darkgray;
}
</style>
