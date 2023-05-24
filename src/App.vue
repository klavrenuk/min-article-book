<template>
  <div id="app" class="app">
    <div class="container">
      <TheCategories />

      <ModalCategory />
    </div>
  </div>
</template>

<script>
import TheCategories from "@/pages/TheCategories";
import ModalCategory from "@/components/modal/ModalCategory";

export default {
  name: 'App',
  components: {
    TheCategories,
    ModalCategory
  }
}
</script>

<style lang="less">
  @import './assets/styles.min.css';
</style>
