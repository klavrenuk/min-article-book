const Modal = {
    showModalCategory({commit}, options = null) {
        commit('showModalCategory', options);
    },

    closeModalCategory({commit}) {
        commit('closeModalCategory');
    },

    showModalDefault({commit}, options = {}) {
        commit('showModalDefault', options);
    },

    closeModalDefault({commit}) {
        commit('closeModalDefault');
    },

    showModalRemove({commit}, options) {
        commit('showModalRemove', options);
    },

    hideModalRemove({commit}) {
        commit('hideModalRemove');
    }
}

export default Modal;