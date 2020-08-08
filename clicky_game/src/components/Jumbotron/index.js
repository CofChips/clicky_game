import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid jumbo align-middle">
            <div className="container text-center">
                <h1 className="display-4 my-5 pt-5 clickytitle">Clicky Game!</h1>
                <p className="lead subhead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
}

export default Jumbotron;