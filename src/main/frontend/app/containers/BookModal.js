import React from "react";
import {connect} from "react-redux";
import {BookActions} from "./../actions";

import BookModalComponent from "../components/BookModal";

const mapStateToProps = ({BookReducer}) => {
    return {
        bookModalWindowIsVisible: BookReducer.bookModalWindowIsVisible
    }
};

class BookModal extends React.Component {

    onClose = () => {
        this.props.dispatch(new BookActions().closeBookModal());
    };

    render() {
        return (<BookModalComponent visible={this.props.bookModalWindowIsVisible} onClose={this.onClose}/>)
    }
}

export default connect(mapStateToProps, null)(BookModal);


