<template>
  <div id="app" class="app block_with_effect"
       :class="!$store.state.isLoading ? 'active' : ''"
  >
    <button @click="showInfo()">show info</button>

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
import articles from '@/mock/articles.json';

export default {
  name: 'App',
  components: {
    LoaderGlobal,
    TheCategories,
    ModalCategory
  },

  methods: {
    ...mapActions([
      'setLoading',
      'setArticles'
    ]),

    showInfo() {
      console.log('showInfo');
      console.log(this.$store.state);
    }
  },

  mounted() {
    setTimeout(() => {
      this.setArticles(articles);
      this.setLoading(false);
    }, 1000);
  }
}
</script>

<style lang="less">
  @import './assets/styles.min.css';
</style>
