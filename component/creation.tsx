'use client'

import Link from "next/link";

function Creation() {
  return (
    <>
      <div
        className="py-5 bg-light"
        id="mes creations"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Mes <span className="texte-rose">Créations</span>
          </h2>

          <div className="row">
            {/* Montage Vidéo */}
            <Link href="/montagevideo" className="col-lg-4 mb-4 text-decoration-none">
              <div className="card shadow-lg border-0 h-100 d-flex flex-column hover-effect">
                <img src="/img/v.jpg" className="card-img-top fixed-img img-hover" alt="Montage Vidéo" />
                <div className="card-body text-center d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Vidéographe</h5>
                  <p className="text-secondary flex-grow-1">
                    Réalisation de vidéos captivantes avec un montage fluide, des effets visuels percutants et des animations dynamiques.
                  </p>
                </div>
              </div>
            </Link>

            {/* Montage Vidéo */}
            <Link href="/montagevideo" className="col-lg-4 mb-4 text-decoration-none">
              <div className="card shadow-lg border-0 h-100 d-flex flex-column hover-effect">
                <img src="/img/hero2.jpg" className="card-img-top fixed-img img-hover" alt="Montage Vidéo" />
                <div className="card-body text-center d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Montage Vidéo</h5>
                  <p className="text-secondary flex-grow-1">
                    Création de vidéos dynamiques avec effets spéciaux et animations.
                  </p>
                </div>
              </div>
            </Link>

            {/* Infographie */}
            <Link href="/affiche" className="col-lg-4 mb-4 text-decoration-none">
              <div className="card shadow-lg border-0 h-100 d-flex flex-column hover-effect">
                <img src="/img/i.avif" className="card-img-top fixed-img img-hover" alt="Infographie" />
                <div className="card-body text-center d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Infographie</h5>
                  <p className="text-secondary flex-grow-1">
                    Création de visuels impactants : affiches, logos, flyers et bannières en utilisant Photoshop et Illustrator.
                  </p>
                </div>
              </div>
            </Link>

            {/* Photographie */}
            <Link href="/image" className="col-lg-4 mb-4 text-decoration-none">
              <div className="card shadow-lg border-0 h-100 d-flex flex-column hover-effect">
                <img src="/img/hero3.jpg" className="card-img-top fixed-img img-hover" alt="Photographie" />
                <div className="card-body text-center d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Photographie</h5>
                  <p className="text-secondary flex-grow-1">
                    Shooting professionnel, retouches avancées et correction colorimétrique avec Lightroom et Photoshop.
                  </p>
                </div>
              </div>
            </Link>

            {/* Cadrage */}
            <Link href="cadrage" className="col-lg-4 mb-4 text-decoration-none">
              <div className="card shadow-lg border-0 h-100 d-flex flex-column hover-effect">
                <img src="/img/c.avif" className="card-img-top fixed-img img-hover" alt="Cadrage" />
                <div className="card-body text-center d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Cadrage</h5>
                  <p className="text-secondary flex-grow-1">
                    Maîtrise des plans et angles de prise de vue pour des vidéos et photos de haute qualité.
                  </p>
                </div>
              </div>
            </Link>

            {/* Design Graphique */}
            <Link href="#" className="col-lg-4 mb-4 text-decoration-none">
              <div className="card shadow border-0 h-100 d-flex flex-column hover-effect">
                <img src="/img/gé.avif" className="card-img-top fixed-img img-hover" alt="Design Graphique" />
                <div className="card-body text-center d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Design Graphique</h5>
                  <p className="text-secondary flex-grow-1">
                    Conception de designs modernes et attractifs pour les marques et entreprises.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Styles CSS pour les images et les effets */}
      <style jsx>{`
        .fixed-img {
          height: 200px; /* Ajuste la hauteur */
          object-fit: cover; /* Coupe et ajuste l'image sans déformation */
          width: 100%; /* Prend toute la largeur */
        }

        /* Effet de survol pour les cartes */
        .hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-effect:hover {
          transform: scale(1.05); /* Zoom léger de la carte */
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Ombre légère */
        }

        /* Effet de survol sur l'image */
        .img-hover {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .img-hover:hover {
          transform: scale(1.1); /* Zoom sur l'image */
          filter: brightness(0.7); /* Assombrir l'image */
        }
      `}</style>
    </>
  );
}

export default Creation;
