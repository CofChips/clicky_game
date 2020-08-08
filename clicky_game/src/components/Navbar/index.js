import React from "react";
import "./style.css";

function Navbar() {

    return (
        <nav class="navbar navbar-light background fixed-top">
            <a class="navbar-brand brand" href="#">Clicky Game</a>
            <span class="navbar-text title">
                Click an image to begin!
            </span>
            <span class="navbar-text">
                Placeholder for score
             </span>
        </nav>
    )



}

export default Navbar;