function reload(state) {
    state.isLoading = true;

    setTimeout(() => {
        state.isLoading = false;
    }, 600);
}

const Categories = {
    addCategory(state, category) {
        category.id = new Date().getTime();
        state.categories.push(category);
    },

    editCategory(state, options) {
        state.categories[options.index] = options.category;
        reload(state);
    },

    removeCategory(state, index) {
        console.log('removeCategory', index);

        state.categories.splice(index, 1);
        reload(state);
    },

    setFilterArticles(state, str) {
        state.filterArticles = str;
    }
}

export default Categories;