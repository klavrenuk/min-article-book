function toggleFixedClass(isAdd = false) {
    const body = document.getElementById('body');
    if(body) {
        if(isAdd) {
            body.classList.add('fixed');
        } else {
            body.classList.remove('fixed');
        }
    }
}

const Modal = {
    showModalDefault(state, options) {
        state.modalDefault = {
            ...options,
            isShow: true
        }

        toggleFixedClass(true);
    },

    setModalState(state, options) {
        state.modalDefault = {
            ...state.modalDefault,
            ...options
        }
    },

    closeModalDefault(state) {
        state.modalDefault = null;
        toggleFixedClass(false);
    },

    showModalRemove(state, options) {
        state.modalRemove = options;
        toggleFixedClass(true);
    },

    hideModalRemove(state) {
        state.modalRemove = null;
        toggleFixedClass(false);
    }
}

export default Modal;