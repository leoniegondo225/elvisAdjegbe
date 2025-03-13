"use client"

import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {

    return (
        <footer className="text-center text-lg-start vert text-dark">

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom  ">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>



                <div>
                    <Link href="https://www.facebook.com/elvis.charles.547
" className="me-4 text-primary ">
                        <FaFacebook className="fs-3" />
                    </Link>
                    <Link href=" https://x.com/ElvisAdjegbe?t=xKC8-CZRhBGWTuY-7PviuA&s=09

" className="me-4 text-dark">
                        <FaSquareXTwitter className="fs-3" />
                    </Link>
                    <Link href="adjegbeelvis@gmail.com" className="me-4 text-reset">
                        <FcGoogle className="fs-3" />
                    </Link>
                    <Link href=" https://www.instagram.com/elvisadjegbe/profilecard/?igsh=MWh5dXRiMmZ4dGlraQ==
" className="me-4 text-danger">
                        <FaInstagramSquare className="fs-3" />
                    </Link>
                    <Link href=":https://www.linkedin.com/in/elvis-adjegbe-56750b239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="me-4 text-primary">
                        <FaLinkedin className="fs-3" />
                    </Link>
                    
                </div>

            </section>

            <div className="text-center p-4 bg-secondary text-light">
                © 2025 Copyright:
                <Link className="text-reset fw-bold" href="#">Elvis communication</Link>
            </div>

        </footer>
    )

}

export default Footer
