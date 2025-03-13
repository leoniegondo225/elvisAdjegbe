"use client"
import Footer from '@/component/footer'
import NavBar from '@/component/Navbar'
import React from 'react'


function Page() {
    return (
        <>
            <NavBar />
        <div className="container mb-5">
        <div className="row align-item-center justify-content-center">
<div className="col-md-4">
<img src="/img/im1.jpg" alt="" className="img-fluid" width={300} />
</div>
<div className="col-md-4">
<img src="/img/im2.jpg" alt="" className="img-fluid" width={300}/>
</div>
<div className="col-md-4">
<img src="/img/im3.jpg" alt=""className="img-fluid" width={300} />
</div>
<div className="col-md-4">
<img src="/img/im4.jpg" alt="" className="img-fluid" width={300} />
</div>
<div className="col-md-4">
<img src="/img/im5.jpg" alt="" className="img-fluid" width={300}/>
</div>
<div className="col-md-4">
<img src="/img/im6.jpg" alt="" className="img-fluid" width={300}/>
</div>
<div className="col-md-4">
<img src="/img/im7.jpg" alt="" className="img-fluid" width={300}/>
</div>
<div className="col-md-4">
<img src="/img/im8.jpg" alt="" className="img-fluid" width={300}/>
</div>
        </div>
        </div>

            <Footer />
        </>
    )
}

export default Page
