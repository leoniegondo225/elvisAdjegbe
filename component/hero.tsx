"use client"

import { FaCheckCircle } from "react-icons/fa"


function Hero() {
    return (
        <>
            <div className=" container mb-5 py-5" data-aos="fade-up" data-aos-delay="200">
                <div className="row pt-5 align-item-center">
                    <div className="col-lg-6 mb-4">
                    <h1 className="fw-bold taille mb-4"> Hello je suis <span className="texte-vert">ELVIS ADJEGBE</span>
                    </h1>
                       
                        
                        <p className="text-secondary  mb-4">  De la conception graphique au montage vidéo, je transforme vos idées en visuels captivants.
                            Création de logos, retouche photo, animations et montage professionnel, tout est pensé pour mettre en valeur votre image et raconter votre histoire de manière percutante.
                        </p>

                        <ul className="choix mb-4">
                            <li><FaCheckCircle className="text-success me-2"/> Création graphique et design sur mesure</li>
                            <li> <FaCheckCircle className="text-success me-2"/>Photographie professionnelle et retouche avancée</li>
                            <li><FaCheckCircle className="text-success me-2" /> Montage vidéo et effets visuels dynamiques</li>
                            <li><FaCheckCircle className="text-success me-2" /> Identité visuelle et branding impactant</li>
                        </ul>
                        <a href="/about" className="btn btn-outline-success btn-lg">En savoir plus</a>
                    </div>

                     <div className="col-lg-6">
                        <img src="/img/hero2.jpg" className="img-fluid rounded-3 shadow-lg shadow-sm" alt="" width={500} height={1} />
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Hero

