import React from "react";
import "./style.css";

function Navbar(props) {

    return (
        <nav className="navbar background fixed-top">
            <div className="row w-100 m-0">
                <div className="col-4">
                    <a className="navbar-brand brand" href="#">SF Giants Clicky Game!</a>
                </div>
                <div className="col-4 text-center">
                    <span className="navbar-text title">
                        {props.banner}
                    </span>
                </div>
                <div className="col-4 text-right">
                    <span className="navbar-text scores">
                        Score: {props.current} | High Score: {props.high}
                    </span>
                </div>

            </div>



        </nav>
    )



}

export default Navbar;