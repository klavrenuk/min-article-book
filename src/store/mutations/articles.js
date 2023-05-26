import {saveStore} from '@/DataBase';
import {toggleFixedClass} from '@/middleware/toggleClasses';

function reload(state) {
    state.isLoading = true;

    setTimeout(() => {
        state.isLoading = false;
        toggleFixedClass();
    }, 600);
}

const Articles = {
    setArticles(state, list) {
        state.articles = list;
    },

    saveArticle(state) {
        try {
            const newCategories = state.modalDefault.selectedCategories.filter((category) => category.id === null);
            for(let newCategory of newCategories) {
                newCategory.id = new Date().getTime();
                state.categories.unshift(newCategory);
                state.modalDefault.selectedCategories.push(newCategory);
            }

            const selectedCategoriesIds = state.modalDefault.selectedCategories.map((category) => category.id);

            const selectedArticle = state.articles.filter((article) => {
                if(state.modalDefault.articleId === article.id) return article ;
            });

            for(let category of state.categories) {
                let isAdd = false;

                if(!category.articles) category.articles = [];

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

            state.modalDefault = null;
            reload(state);
            saveStore(state.categories);

        } catch(err) {
            console.error(err);
        }
    }
}

export default Articles;