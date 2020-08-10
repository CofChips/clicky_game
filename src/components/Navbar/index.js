import React from "react";
import "./style.css";

       
function Navbar(props) {
    return (

 <nav className="navbar background fixed-top">
            <ul className="w-100 m-0 p-0">
                <li className="list text-left">
                    <a className="navbar-brand brand" href="/">SF Giants Clicky Game!</a>
                </li>
                <li className="list text-center">
                    <span className={props.style}>
                        {props.banner}
                    </span>
                </li>
                <li className="list text-right">
                    <span className="navbar-text scores">
                        Score: {props.current} | High Score: {props.high}
                    </span>
                </li>
            </ul>
        </nav>

    )



}

export default Navbar;
