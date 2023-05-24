const Modal = {
    showModalCategory(state, value) {
        console.log('mutation');
        state.modalCategory = {
            ...value,
            isShow: true
        }
    },

    closeModalCategory(state) {
        state.modalCategory = null;
    },

    showModalRemove(state, item) {
        state.isShowModalRemove = true;
    },

    hideModalRemove(state) {
        state.isShowModalRemove = false;
    }
}

export default Modal;