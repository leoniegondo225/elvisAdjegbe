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
                        <img 
                            src="/img/in1.jpg" 
                            alt="Image 1" 
                            className="img-fluid shadow-lg rounded hover-effect" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <img 
                            src="/img/in2.jpg" 
                            alt="Image 2" 
                            className="img-fluid shadow-lg rounded hover-effect" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <img 
                            src="/img/in3.jpg" 
                            alt="Image 3" 
                            className="img-fluid shadow-lg rounded hover-effect" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <img 
                            src="/img/in4.jpg" 
                            alt="Image 4" 
                            className="img-fluid shadow-lg rounded hover-effect" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <img 
                            src="/img/in5.jpg" 
                            alt="Image 5" 
                            className="img-fluid shadow-lg rounded hover-effect" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <img 
                            src="/img/in6.jpg" 
                            alt="Image 6" 
                            className="img-fluid shadow-lg rounded hover-effect" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <img 
                            src="/img/in7.jpg" 
                            alt="Image 7" 
                            className="img-fluid shadow-lg rounded hover-effect" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <img 
                            src="/img/in8.png" 
                            alt="Image 8" 
                            className="img-fluid shadow-lg rounded hover-effect" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <img 
                            src="/img/in9.png" 
                            alt="Image 9" 
                            className="img-fluid shadow-lg rounded hover-effect" 
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page
