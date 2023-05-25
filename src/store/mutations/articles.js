const Articles = {
    setArticles(state, list) {
        state.articles = list;
    },

    saveArticle(state, article) {
        console.log('save article', state);
        console.log('article', article);
    }
}

export default Articles;