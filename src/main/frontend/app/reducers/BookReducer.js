import { BOOK } from '../actionTypes';

const initialState = {
    bookModalWindowIsVisible: false,
    bookButtonText: "Zarezerwuj"
};
export default (state = initialState, action) => {

    switch (action.type) {
        case BOOK.START_BOOK:
            return Object.assign({}, state, {
                bookModalWindowIsVisible: true
            });
        case BOOK.CLOSE_BOOK_MODAL:
            return Object.assign({}, state, {
                bookModalWindowIsVisible: false
            });
        default:
            return state;

    }
}