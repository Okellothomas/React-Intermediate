import React from "react";
import "../index.css"

export default function Header(){
    return(
        <div className="header">
            <img src="../images/skate.jpg" />
            <ul className="nav">
                <li>About</li>
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </div>

    )
}