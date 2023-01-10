import React from "react";
import profile from "../assets/img/p-profile.png"
import '../styles/Home.css'

const Home = () => {

    return (
        <div className="container-card">
            <div className="card">
                <div className="i-profile">
                    <img src={profile} />
                </div>
                <div className="details">
                    <div className="center">
                        <h1>Célia Santos<br></br><span>LOREM IPSUM</span></h1>
                        <p> Formada em Turismo com experiências profissionais em grandes redes hoteleiras em São Paulo.</p>
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home