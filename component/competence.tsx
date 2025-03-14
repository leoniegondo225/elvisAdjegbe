"use client"

import { FaClock, FaPalette, FaVideo } from "react-icons/fa"
import { MdAddAPhoto } from "react-icons/md"




function Competence() {
    return (
        <>

            <div className="mb-5 " id="competence" data-aos="fade-up" data-aos-delay="200">
                <div className="container text-center">
                    <h2 className="fw-bold text-center mb-4">Mes <span className="texte-rose">Compétences</span></h2>
                    <div className="row text-center justify-content-center">
                        <div className="col-sm-3 mb-3 mb-sm-0 ">
                            <div className="card shadow h-100 d-flex flex-column">
                                <div className="card-body d-flex flex-column">

                                    <MdAddAPhoto className="fs-2 text-info mb-3 " />

                                    <h5 className="card-text  fw-bold">Photographie et Cadrage </h5>
                                    <p className="text-secondary flex-grow-1">
                                        Maîtrise du cadrage,
                                        Prise de vue professionnelle, retouches avancées et colorimétrie pour sublimer vos images avec Adobe Lightroom et Photoshop.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 mb-3 mb-sm-0">
                            <div className="card shadow h-100 d-flex flex-column">
                                <div className="card-body d-flex flex-column">


                                    <FaVideo className="fs-2 text-primary mb-5" />

                                    <h5 className="card-text mbicone4-2 fw-bold"> Montage Vidéo</h5>
                                    <p className="text-secondary flex-grow-1">
                                        Montage dynamique, effets spéciaux et animations avec Premiere Pro, After Effects et DaVinci Resolve pour des vidéos impactantes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mb-3 mb-sm-0">
                            <div className="card shadow h-100 d-flex flex-column">
                                <div className="card-body d-flex flex-column">

                                    <FaPalette className="fs-2 text-warning mb-5" />

                                    <h5 className="card-text mb-2 fw-bold">Infographie & Design</h5>
                                    <p className="text-secondary flex-grow-1">
                                        Création de visuels percutants, logos, affiches et supports marketing en utilisant Adobe Photoshop, Illustrator et InDesign.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mb-3 mb-sm-0">
                            <div className="card shadow  h-100 d-flex flex-column">
                                <div className="card-body d-flex flex-column">

                                    <FaClock className="fs-2 text-success  mb-5" />
                                    <h5 className="card-text mb-2 fw-bold">Disponibilité 24h/24</h5>
                                    <p className="text-secondary flex-grow-1">Flexibilité et réactivité pour répondre à vos besoins en création graphique, photo et vidéo à tout moment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Competence