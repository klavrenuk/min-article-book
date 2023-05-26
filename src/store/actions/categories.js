const Categories = {
    addCategory({commit}) {
        commit('addCategory');
    },

    editCategory({commit}, options = {}) {
        commit('editCategory', options);
    },

    removeCategory({commit}, category) {
        commit('removeCategory', category);
    },

    setFilterArticles({commit}, str) {
        commit('setFilterArticles', str);
    },

    setCategoriesDefault({commit}, categories) {
        commit('setCategoriesDefault', categories);
    }
}

export default Categories;