"use client"

function Contact() {
    return (
        <>
            <section id="contact" className="py-5 bg-light" data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <h2 className="text-center fw-bold mb-4">Contactez-moi</h2>
                    <p className="text-center mb-5">N'hésitez pas à me contacter pour toute question, projet ou collaboration !</p>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <form action="https://wa.me/ton_numero_whatsapp?text=Bonjour,%20je%20souhaite%20entrer%20en%20contact%20avec%20vous.%20Voici%20mes%20informations:%20" method="get" target="_blank">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nom</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Votre nom" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Votre e-mail" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows={4} placeholder="Votre message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-success btn-lg w-100">Envoyer sur WhatsApp</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact