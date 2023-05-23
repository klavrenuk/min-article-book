<template>
  <div id="app" class="app">
    <TheCategories />
  </div>
</template>

<script>
import TheCategories from "@/pages/TheCategories";

export default {
  name: 'App',
  components: {
    TheCategories
  }
}
</script>

<style lang="less">
  @import './assets/styles.min.css';
</style>
