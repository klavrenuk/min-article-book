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
    }
}

export default Modal;