import Loading from './loading';
import Modal from './modal';
import Categories from './categories';
import Articles from "@/store/actions/articles";

const actions = {
    ...Loading,
    ...Modal,
    ...Categories,
    ...Articles
}

export default actions;