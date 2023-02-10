import React from "react";
import "../index.css"

export default function Header(){
    return(
        <div className="bd">
            <img src="../images/skate.jpg" />
            <ul className="nav">
                <li>About</li>
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </div>

    )
}