import Loading from './loading';
import Modal from './modal';
import Categories from './categories';
import Articles from './articles';

const mutations = {
    ...Loading,
    ...Modal,
    ...Categories,
    ...Articles
}

export default mutations;