<template>
  <div id="app" class="app">
    <button @click="showInfo()">show info</button>

    <LoaderGlobal v-if="$store.state.isLoading" />

    <div class="container block_with_effect"
         :class="!$store.state.isLoading ? 'active' : ''"
         v-else>
      <TheCategories />

      <ModalRemove v-if="isShowModalRemove" />
      <ModalDefault v-if="isShowModalDefault" />
    </div>
  </div>
</template>

<script>
import TheCategories from "@/pages/TheCategories";
import LoaderGlobal from "@/components/loaders/LoaderGlobal";
import ModalRemove from "@/components/modal/ModalRemove";
import ModalDefault from "@/components/modal/ModalDefault";
import {mapActions, mapGetters} from 'vuex';
import articles from '@/mock/articles.json';
import {initDb, readDb} from '@/DataBase';

export default {
  name: 'App',
  components: {
    ModalDefault,
    ModalRemove,
    LoaderGlobal,
    TheCategories
  },

  computed: {
    ...mapGetters([
      'isShowModalRemove',
      'isShowModalDefault'
    ])
  },

  methods: {
    ...mapActions([
      'setLoading',
      'setArticles',
      'setCategoriesDefault'
    ]),

    showInfo() {
      console.log('showInfo');
      console.log(this.$store.state);
    }
  },

  async beforeCreate() {
    await initDb();
    const categoriesDefault = await readDb();

    console.log('categoriesDef', categoriesDefault);

    this.setArticles(articles);
    this.setCategoriesDefault(categoriesDefault);
    this.setLoading(false);
  }
}
</script>

<style lang="less">
  @import './assets/styles.min.css';

  .app {
    padding-bottom: 112px;
  }
</style>
