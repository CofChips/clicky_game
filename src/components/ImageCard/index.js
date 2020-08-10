import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <div className="card mx-md-5">
      <div className="img-container">
        <img alt={props.name} src={props.image} id = {props.id} onClick={(e)=>props.handleIncrement(e.target.id)}/>
      </div>
      
    </div>
    )
}

export default ImageCard;