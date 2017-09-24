import React from "react";

import IntroLead from "../components/IntroLead";
import Book from "../containers/Book";

export default class Nav extends React.Component {

    render() {
        return <header className="masthead">
            <div className="container">
                <div className="intro-text">
                    <IntroLead/>
                    <div className="intro-heading">It's Nice To Meet You</div>
                    <Book/>
                </div>
            </div>
        </header>
    }
}




