import React from "react";
import "./style.css";

function Navbar(props) {

    return (
        <nav className="navbar navbar-light background fixed-top">
            <a className="navbar-brand brand" href="#">Clicky Game</a>
            <span className="navbar-text title">
                Click an image to begin!
            </span>
            <span className="navbar-text">
                Current Score: {props.current}
             </span>
        </nav>
    )



}

export default Navbar;