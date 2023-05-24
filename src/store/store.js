import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

Vue.use(Vuex)

const state = {
    modalCategory: null
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})