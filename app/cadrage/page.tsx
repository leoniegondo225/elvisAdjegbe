"use client"

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
                        <img src="/img/Ca1.jpg" alt="Artwork 1" className="img-fluid shadow-lg rounded" />
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page