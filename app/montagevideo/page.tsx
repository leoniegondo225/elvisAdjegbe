'use client'
import Footer from '@/component/footer'
import NavBar from '@/component/Navbar'
import React from 'react'

function Page() {
    return (
        <>
            <NavBar />
            <div className="container mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi1.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi2.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi3.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi4.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi5.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi6.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi7.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi8.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi9.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    <div className="col-md-4 mb-4">
                        <video width="100%" controls className="shadow-lg rounded">
                            <source src="/img/vi10.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page
