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
<div className="col-md-4">
<img src="/img/in1.jpg" alt="" className="img-fluid" width={300} />
</div>
<div className="col-md-4">
<img src="/img/in2.jpg" alt="" className="img-fluid" width={300}/>
</div>
<div className="col-md-4">
<img src="/img/in3.jpg" alt=""className="img-fluid" width={300} />
</div>
<div className="col-md-4">
<img src="/img/in4.jpg" alt="" className="img-fluid" width={300} />
</div>
<div className="col-md-4">
<img src="/img/in5.jpg" alt="" className="img-fluid" width={300}/>
</div>
<div className="col-md-4">
<img src="/img/in6.jpg" alt="" className="img-fluid" width={300}/>
</div>
<div className="col-md-4">
<img src="/img/in7.jpg" alt="" className="img-fluid" width={300}/>
</div>
<div className="col-md-4">
<img src="/img/in8.png" alt="" className=
"img-fluid" width={300}/>
</div>
<div className="col-md-4">
<img src="/img/in9.jpg" alt="" className="img-fluid" width={300}/>
</div>
        </div>
        </div>

            <Footer />
        </>
    )
}

export default Page
