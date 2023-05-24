import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters/getters";
import mutations from "./mutations/mutations";
import actions from './actions/actions';

Vue.use(Vuex)

const state = {
    modalCategory: null,
    isLoading: true,
    categories: [
        {
            id: 1,
            articles: ["item#2"],
            name: 'faeke name',
            parent: '111'
        }
    ],
    isShowModalRemove: false
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})