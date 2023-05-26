import {saveStore} from '@/DataBase';
import {toggleFixedClass} from '@/middleware/toggleClasses';
import {addCategory, removeCategory, isValidCategory} from '@/middleware/categories';

function reload(state) {
    state.isLoading = true;

    setTimeout(() => {
        state.isLoading = false;
        toggleFixedClass();
    }, 600);
}

const Categories = {
    addCategory(state) {
        const newCategory = {
            id: new Date().getTime(),
            name: state.modalDefault.category.name,
            articles: state.modalDefault.articleSelected.slice(),
            parent: state.modalDefault.category.parent || null
        };

        const validation = isValidCategory(newCategory);

        if(!validation.value) {
            state.isValidModalItem = [...validation.options];
            return;

        } else {
            state.isValidModalItem = null;
        }

        if(!newCategory.parent) {
            state.categories.unshift(newCategory);

        } else {
            for(let category of state.categories) {
                addCategory(category, newCategory);
            }
        }

        state.modalDefault = null;
        reload(state);
        saveStore(state.categories);
    },

    editCategory(state) {
        const newCategory = {
            ...state.modalDefault.category,
            articles: state.modalDefault.articleSelected.slice(),
        };

        const validation = isValidCategory(newCategory);
        if(!validation.value) {
            console.log('invalid Category', newCategory);
            state.isValidModalItem = [...validation.options];
            return;

        } else {
            state.isValidModalItem = null;
        }

        if(state.modalDefault.categoryIndex >= 0) {
            state.categories[state.modalDefault.categoryIndex] = {
                ...newCategory
            }

        } else {
            for(let category of state.categories) {
                removeCategory(category, newCategory);
            }

            for(let category of state.categories) {
                addCategory(category, newCategory);
            }
        }

        state.modalDefault = null;
        reload(state);
        saveStore(state.categories);
    },

    removeCategory(state, item) {
        let index = 0;
        for(let category of state.categories) {
            if(category.id === item.category.id) {
                break;
            }

            removeCategory(category, item.category);
            index++;
        }

        state.categories.splice(index, 1);

        reload(state);
        saveStore(state.categories);
    },

    setFilterArticles(state, str) {
        state.filterArticles = str;
    },

    setCategoriesDefault(state, categories) {
        state.categories = categories;
    }
}

export default Categories;