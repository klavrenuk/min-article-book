<template>
  <div id="app" class="app">
    <LoaderGlobal v-if="$store.state.isLoading" />
    <div v-else>
      <button class="app_header-refresh"
              @click="clearStore"
      >
        Сбросить состояния приложения
      </button>

      <div class="container block_with_effect"
           :class="!$store.state.isLoading ? 'active' : ''"
      >
        <TheCategories />

        <ModalRemove v-if="isShowModalRemove" />
        <ModalDefault v-if="isShowModalDefault" />
      </div>
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
import {initDb, readDb, clearDb} from '@/DataBase';

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

    clearStore() {
      clearDb();
      window.location.reload();
    }
  },

  async beforeCreate() {
    await initDb();
    const categoriesDefault = await readDb();

    this.setArticles(articles);
      // this.setCategoriesDefault(categoriesDefault);
    console.log(categoriesDefault);
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
