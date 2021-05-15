import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar img = {props.URL}/>
            </div>
            <div className="bottom">
                <Detail info= {props.phone}/>
                <Detail info = {props.email}/>
            </div>
        </div>
    );
}

export default Card;