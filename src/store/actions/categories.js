const Categories = {
    addCategory({commit}, category = {}) {
        commit('addCategory', category);
    },

    editCategory({commit}, options = {}) {
        commit('editCategory', options);
    },

    removeCategory({commit}, index) {
        commit('removeCategory', index);
    },

    setFilterArticles({commit}, str) {
        commit('setFilterArticles', str);
    }
}

export default Categories;