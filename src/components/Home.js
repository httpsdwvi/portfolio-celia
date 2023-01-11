import React from "react";
import profile from "../assets/img/p-profile.png"
import '../styles/Home.css'

const Home = () => {

    return (
        <div className="container-card">
            <div className="card">
                <div className="i-profile">
                    <img src={profile} alt="Celia - Foto de perfil"/>
                </div>
                <div className="details">
                    <div className="center">
                        <h1>Célia Santos<br></br><span> Sócia </span></h1>
                        <p> Casada e mãe de 2 filhos, sou formada em Turismo com experiências profissionais em grandes redes hoteleiras em São Paulo. Decidi sair do ramo hoteleiro e iniciei um novo empreendimento, o sonho do próprio negócio </p>
                        <h4> Entre em contato: </h4>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/celia-santos/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.instagram.com/donamarizapizzas/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://wa.me/5511957397697"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home