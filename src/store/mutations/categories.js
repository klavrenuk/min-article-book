import {saveStore} from '@/DataBase';
import {toggleFixedClass} from '@/middleware/toggleClasses';

function reload(state) {
    state.isLoading = true;

    setTimeout(() => {
        state.isLoading = false;
        toggleFixedClass();
    }, 600);
}

function addCategory(category, newCategory) {
    if(category.id === newCategory.parent) {
        if(!category.subCategories) category.subCategories = [];

        category.subCategories.push(newCategory);

    } else {
        if(category.subCategories) {
            for(let subCategories of category.subCategories) {
                addCategory(subCategories, newCategory);
            }
        }
    }
}

function removeCategory(category, itemRemove) {
    if(category.subCategories) {
        let index = 0;

        for(let subCategories of category.subCategories) {
            if(subCategories.id === itemRemove.id) {
                break
            } else {
                if(subCategories.subCategories) {
                    addCategory(subCategories, itemRemove);
                }
            }

            index++;
        }

        category.subCategories.splice(index, 1);
    }
}

const Categories = {
    addCategory(state) {
        const newCategory = {
            id: new Date().getTime(),
            name: state.modalDefault.category.name,
            articles: state.modalDefault.articleSelected.slice(),
            parent: state.modalDefault.category.parent || null
        };

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
            name: state.modalDefault.category.name,
            articles: state.modalDefault.articleSelected.slice(),
            parent: state.modalDefault.category.parent || null
        };
        const index = state.modalDefault.category.index;

        if(
            !newCategory.parent ||
            state.categories[index].id === newCategory.parent
        ) {
            state.categories[index] = Object.assign({}, newCategory);

        } else {
            state.categories.splice(index, 1);

            for(let category of state.categories) {
                addCategory(category, newCategory);
            }
        }

        state.modalDefault = null;
        reload(state);
        saveStore(state.categories);
    },

    removeCategory(state, item) {
        for(let category of state.categories) {
            removeCategory(category, item.category);
        }

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