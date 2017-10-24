import React from "react";
import {connect} from "react-redux";

import BookButton from "../components/BookButton";
import {BookActions} from "./../actions";

const mapStateToProps = ({BookReducer}) => {
    return {
        text: BookReducer.bookButtonText
    }
};

class Book extends React.Component {

    onButtonClick = () => {
        this.props.dispatch(new BookActions().book())
    };

    render() {
        return (<BookButton onClick={this.onButtonClick} text={this.props.text}/>)
    }
}

export default connect(mapStateToProps, null)(Book);


