export const addEvent = (callback) => {
    document.addEventListener('keydown', function handler(event) {
        if (event.key.startsWith('Esc')) {
            this.removeEventListener(event.type, handler);
            callback();
        }
    });
}