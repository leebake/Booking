import { BOOK } from '../actionTypes';

const initialState = {
    bookModalWindowIsVisible: false
};
export default (state = initialState, action) => {

    switch (action.type) {
        case BOOK.START_BOOK:
            return Object.assign({}, state, {
                bookModalWindowIsVisible: true
            });
        default:
            return state;

    }
}