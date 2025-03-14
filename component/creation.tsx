"use client"

import Link from "next/link"




function Creation() {
    return (
        <>
<div className="py-5 bg-light" id="mes creations" data-aos="fade-up" data-aos-delay="200">
    <div className="container">
        <h2 className="fw-bold text-center mb-5">Mes <span className="texte-rose">Mes créations</span></h2>
        
        <div className="row">
            {/* Montage Vidéo */}
            <Link href="/montagevideo" className="col-lg-4 mb-4 text-decoration-none">
                <div className="card shadow-lg border-0">
                    <img src="/img/v.avif" className="card-img-top" alt="Montage Vidéo" />
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Montage Vidéo</h5>
                        <p className="text-secondary">
                            Création de vidéos dynamiques avec effets spéciaux et animations. Utilisation de Premiere Pro et After Effects.
                        </p>
                    </div>
                </div>
            </Link>

            {/* Infographie */}
            <Link href="/affiche" className="col-lg-4 mb-4 text-decoration-none">
                <div className="card shadow-lg border-0">
                    <img src="/img/i.avif" className="card-img-top" alt="Infographie" />
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Infographie</h5>
                        <p className="text-secondary">
                            Création de visuels impactants : affiches, logos, flyers et bannières en utilisant Photoshop et Illustrator.
                        </p>
                    </div>
                </div>
            </Link>

            {/* Photographie */}
            <Link href="/image" className="col-lg-4 mb-4 text-decoration-none">
                <div className="card shadow-lg border-0">
                     <img src="/img/hero3.jpg" className="card-img-top" alt="Photographie" />
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Photographie</h5>
                        <p className="text-secondary">
                            Shooting professionnel, retouches avancées et correction colorimétrique avec Lightroom et Photoshop.
                        </p>
                    </div>
                </div>
            </Link>

            {/* Cadrage */}
            <Link href="#" className="col-lg-4 mb-4 text-decoration-none ">
                <div className="card shadow-lg border-0">
                    <img src="/img/c.avif" className="card-img-top" alt="Cadrage" />
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Cadrage</h5>
                        <p className="text-secondary">
                            Maîtrise des plans et angles de prise de vue pour des vidéos et photos de haute qualité.
                        </p>
                    </div>
                </div>
            </Link>

            {/* Design Graphique */}
            <Link href="#" className="col-lg-4 mb-4 text-decoration-none">
                <div className="card shadow border-0">
                    <img src="/img/gé.avif" className="card-img-top" alt="Design Graphique" />
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Design Graphique</h5>
                        <p className="text-secondary">
                            Conception de designs modernes et attractifs pour les marques et entreprises.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
</div>
</>
)
}
export default Creation