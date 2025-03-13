"use client"

import Commentaire from "@/component/commentaire";
import Competence from "@/component/competence";
import Contact from "@/component/contact";
import Creation from "@/component/creation";
import Footer from "@/component/footer";
import Hero from "@/component/hero";
import NavBar from "@/component/Navbar";


 function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Competence/>
      <Creation/>
      <Commentaire/>
      <Contact/>
      <Footer/>
    </div>
  
  )
}
 export default Home;