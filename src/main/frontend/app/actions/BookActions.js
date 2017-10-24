import { BOOK } from "../actionTypes";

export default class BookActions {

    book() {
        return {
            type: BOOK.START_BOOK
        };
    }

    closeBookModal() {
        return {
            type: BOOK.CLOSE_BOOK_MODAL
        };
    }

}