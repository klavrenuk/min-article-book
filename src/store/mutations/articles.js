const Articles = {
    setArticles(state, list) {
        state.articles = list;
    },

    saveArticle(state) {
        try {
            const selectedCategoriesIds = state.modalDefault.selectedCategories.map((category) => category.id);
            const selectedArticle = state.articles.filter((article) => {
                if(state.modalDefault.articleId === article.id) return article ;
            });

            for(let category of state.categories) {
                let isAdd = false;

                category.articles = category.articles.filter((article) => {
                    if(article.id !== state.modalDefault.articleId) return article;

                    if(selectedCategoriesIds.includes(category.id)) {
                        isAdd = true;
                        return article;
                    }
                })

                if(!isAdd && selectedCategoriesIds.includes(category.id)) {
                    category.articles.push(selectedArticle[0])
                }
            }

        } catch(err) {
            console.error(err);
        }
    }
}

export default Articles;