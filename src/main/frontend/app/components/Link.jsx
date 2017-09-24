import React from "react";

export default class Link extends React.Component {

    componentDidMount() {
        this.$element = $(this.element);
        this.$element.smoothScrolling();
    }

    render() {
        const text = this.props.children;
        const href = `#${this.props.href}`;
        return ( <a className="nav-link js-scroll-trigger" href={href} ref={element => this.element = element}>{text}</a>)
    }

    componentWillUnmount() {
        this.$element.smoothScrolling('destroy');
    }
}