const Modal = {
    showModalCategory(state, value) {
        state.modalCategory = {
            ...value,
            isShow: true
        }
    },

    closeModalCategory(state) {
        state.modalCategory = null;
    },

    showModalDefault(state, options) {
        state.modalDefault = {
            ...options,
            isShow: true
        }
    },

    closeModalDefault(state) {
        state.modalDefault = null;
    },

    showModalRemove(state, options) {
        state.modalRemove = options;
    },

    hideModalRemove(state) {
        state.modalRemove = null;
    }
}

export default Modal;