import React from "react";
import { connect } from 'react-redux'

import BookButton from "../components/BookButton";
import {BookActions} from "./../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(new BookActions().book())
        },
        text: "Zarezerwuj"
    }
};

// class Book extends React.Component {
//
//     render() {
//         return (<BookButton/>)
//     }
// }

export default connect(null, mapDispatchToProps)(BookButton);


