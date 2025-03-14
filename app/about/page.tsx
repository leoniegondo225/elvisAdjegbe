"use client"

import Footer from "@/component/footer"
import NavBar from "@/component/Navbar"






function About() {
    return (
        <>
        <NavBar/>
        <div className="container">
        <div className="mb-5"> 
           <img src="img/hero1.jpg" alt="photo elvis" className="img-fluid" /> 
        </div>
        <div className="container">
            <h1 className="fw-bold text-center">A propos de moi</h1>
            <p className="pt-4">Passionné(e) par l’infographie, la photographie, le cadrage et le montage vidéo, j’exprime ma créativité à travers l’image et la composition visuelle. Mon objectif ? Capturer l’instant parfait, raconter des histoires puissantes et donner vie aux idées grâce à des visuels percutants et professionnels.</p>
            <p className="pt-4">Toujours en quête d’innovation, j’explore en permanence de nouvelles techniques et outils pour optimiser mon travail et offrir des productions visuelles de haute qualité. Mon approche allie précision, sens artistique et maîtrise des technologies modernes, me permettant ainsi de répondre aux attentes les plus exigeantes.</p>
            <p className="pt-4">En plus de mes compétences techniques, je me distingue par ma rigueur, mon sens du détail et ma capacité à m’adapter aux besoins spécifiques de chaque projet. Qu’il s’agisse de photographie de portrait, de retouche avancée, de motion design ou de montage vidéo dynamique, je mets tout en œuvre pour sublimer chaque création et offrir une expérience visuelle captivante.</p>
            <h3 className="fw-bold pt-4">🎬 Centres d'intérêt</h3>
            <p className="pt-3">En dehors de mon travail, je suis fasciné(e) par l’évolution des technologies créatives et l’intelligence artificielle appliquée aux arts visuels. J’aime expérimenter de nouvelles approches graphiques, tester des logiciels de pointe et me former continuellement pour enrichir mon savoir-faire. La musique et le cinéma sont également des sources d’inspiration majeures dans mon processus créatif.

</p>
<h3 className="fw-bold pt-6">🚀 Objectif </h3>
            <p className="pt-4">Mon ambition est de continuer à évoluer dans le domaine de la création visuelle, en explorant sans cesse de nouvelles techniques et en collaborant sur des projets innovants. Curieux(se), passionné(e) et méticuleux(se), je suis prêt(e) à relever de nouveaux défis et à produire des œuvres visuelles uniques qui marquent les esprits.</p>
        </div>
        </div>
        <Footer/>
        </>
)
}
export default About