import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar(props) {
    const location = useLocation();
    return (
        <nav className="navbar background fixed-top">
            <div className="row w-100 m-0">
                <div className="col-4">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <a className="navbar-brand brand" href="#">SF Giants Clicky Game!</a>
                    </Link>
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