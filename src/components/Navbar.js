import React from "react";
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div className="container-nav">
            <nav>
                <ul>
                    <li><a className="nav-home" href="https://celiasantos.netlify.app/">Célia Santos</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar