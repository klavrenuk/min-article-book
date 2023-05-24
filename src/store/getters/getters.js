const getters = {
    isShowModalCategory(state) {
        if(state.modalCategory) return true;

        return false;
    }
}

export default getters;