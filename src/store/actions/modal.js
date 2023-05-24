const Modal = {
    showModalCategory({commit}, options) {
        console.log('action');
        commit('showModalCategory', options);
    },

    closeModalCategory({commit}) {
        console.log('close modal category');
        commit('closeModalCategory');
    }
}

export default Modal;