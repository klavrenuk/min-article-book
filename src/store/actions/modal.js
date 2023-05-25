const Modal = {
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
    },

    setModalState({commit}, options) {
        commit('setModalState', options);
    }
}

export default Modal;