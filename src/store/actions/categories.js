const Categories = {
    addCategory({commit}) {
        commit('addCategory');
    },

    editCategory({commit}, options = {}) {
        commit('editCategory', options);
    },

    removeCategory({commit}, index) {
        commit('removeCategory', index);
    },

    setFilterArticles({commit}, str) {
        commit('setFilterArticles', str);
    },

    setCategoriesDefault({commit}, categories) {
        commit('setCategoriesDefault', categories);
    }
}

export default Categories;