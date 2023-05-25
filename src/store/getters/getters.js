const getters = {
    isShowModalCategory(state) {
        if(state.modalCategory) return true;

        return false;
    },

    isShowModalRemove(state) {
        if(state.modalRemove) return true;

        return false;
    },

    isShowModalDefault(state) {
        if(state.modalDefault) return true;

        return false;
    },

    modalDefault(state) {
        return state.modalDefault;
    },

    modalCategoryInfo(state) {
        if(!state.modalCategory) return {};

        return state.modalCategory.category;
    },

    modalCategoryIndex(state) {
        if(
            !state.modalCategory ||
            state.modalCategory.index === null ||
            state.modalCategory.index === undefined
        ) return -1;

        return state.modalCategory.index
    },

    categoriesForSelect(state) {
        const arr = state.categories.map((category) => {
            return {
                id: category.id,
                name: category.name
            }
        })

        arr.unshift({
            id: 0,
            name: 'Создать новую категорию'
        });

        return arr;
    }
}

export default getters;