const Articles = {
    setArticles({commit}, list = []) {
        commit('setArticles', list);
    }
}

export default Articles;