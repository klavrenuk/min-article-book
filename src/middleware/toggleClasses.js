export const toggleFixedClass = (isAdd = false) => {
    const body = document.getElementById('body');
    if(body) {
        if(isAdd) {
            body.classList.add('fixed');
        } else {
            body.classList.remove('fixed');
        }
    }
}