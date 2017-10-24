import React from "react";

export default class Book extends React.Component {

    render() {
        const {onClick} = this.props;
        const {text} = this.props;
        return <a onClick={onClick} className="btn btn-xl js-scroll-trigger">{text}</a>
    }
}




