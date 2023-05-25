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
            "name": "article#1",
            "articles": [
                {
                    "id": 1,
                    "text": "Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки направлений прогрессивного развития.",
                    "title": "Title#1",
                    "likes": 40,
                    "img": "/images/category-title.svg"
                }
            ],
            "id": 1684953328277
        },
        {
            "name": "article#2",
            "articles": [
                {
                    "id": 3,
                    "text": "Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки направлений прогрессивного развития.",
                    "title": "Title#3",
                    "likes": 12,
                    "img": "/images/category-title.svg"
                }
            ],
            "id": 1684953336838
        }
    ],
    modalRemove: null,
    articles: [],
    filterArticles: null,
    modalDefault: null
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})