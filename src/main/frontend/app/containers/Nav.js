import React from "react";

import Link from "../components/Link";

export default class Nav extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">TireSwa</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>);
    }
}