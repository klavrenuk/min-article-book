const Categories = {
    addCategories({commit}, category = {}) {
        console.log('action categories');
        commit('addCategory', category);
    }
}

export default Categories;