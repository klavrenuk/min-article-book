<template>
  <div id="app" class="app block_with_effect"
       :class="!$store.state.isLoading ? 'active' : ''"
  >
    <LoaderGlobal v-if="$store.state.isLoading" />

    <div class="container" v-else>
      <TheCategories />

      <ModalCategory />
    </div>
  </div>
</template>

<script>
import TheCategories from "@/pages/TheCategories";
import ModalCategory from "@/components/modal/ModalCategory";
import LoaderGlobal from "@/components/loaders/LoaderGlobal";
import {mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
    LoaderGlobal,
    TheCategories,
    ModalCategory
  },

  methods: {
    ...mapActions([
      'setLoading'
    ])
  },

  mounted() {
    setTimeout(() => {
      this.setLoading(false);
    }, 600);
  }
}
</script>

<style lang="less">
  @import './assets/styles.min.css';
</style>
