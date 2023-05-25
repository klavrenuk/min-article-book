const getters = {
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
    }
}

export default getters;