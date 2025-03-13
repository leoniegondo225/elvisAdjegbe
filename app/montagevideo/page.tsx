"use client"
import Footer from '@/component/footer'
import NavBar from '@/component/Navbar'
import React from 'react'


function Page() {
    return (
        <>
            <NavBar />
            <div className="container mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="row align-item-center justify-content-center">
                    <div className="col-md-6">
                        
                            <video width="500" controls>
                                <source src="/img/vi1.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la balise vidéo.
                            </video>

                       
                    </div>
                    <div className="col-md-6">
                        
                        <video width="500" controls>
                            <source src="/img/vi2.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                        
                    </div>
                    <div className="col-md-6">
                        
                        <video width="500" controls>
                            <source src="/img/vi3.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                       
                    </div>
                </div>
                <div className="col-md-6">
                    <video width="500" controls>
                        <source src="/img/vi4.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                </div>

            </div>


            <Footer />
        </>
    )
}

export default Page
