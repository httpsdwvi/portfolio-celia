import React from "react";
import profile from "../assets/img/p-profile.png"
import '../styles/Home.css'

const Home = () => {

    return (
        <div className="container-img">
            <img className="img-profile" src={profile}/>
            <div className="img-bottom"> Célia </div>
        </div>
    )
}

export default Home