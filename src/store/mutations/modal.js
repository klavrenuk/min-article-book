const Modal = {
    showModalDefault(state, options) {
        state.modalDefault = {
            ...options,
            isShow: true
        }
    },

    setModalState(state, options) {
        state.modalDefault = {
            ...state.modalDefault,
            ...options
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