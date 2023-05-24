const Modal = {
    showModalCategory({commit}, options) {
        commit('showModalCategory', options);
    },

    closeModalCategory({commit}) {
        commit('closeModalCategory');
    },

    showModalRemove({commit}, item) {
        commit('showModalRemove', item);
    },

    hideModalRemove({commit}) {
        commit('hideModalRemove');
    }
}

export default Modal;