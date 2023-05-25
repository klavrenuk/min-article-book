const Articles = {
    setArticles({commit}, list = []) {
        commit('setArticles', list);
    },

    saveArticle({commit}, article) {
        commit('saveArticle', article);
    }
}

export default Articles;