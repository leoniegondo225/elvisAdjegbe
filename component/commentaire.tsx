import { Carousel, Card } from "react-bootstrap";

const Commentaire = () => {
  const reviews = [
    {
      name: "Emmanuel N'guessan",
      text: "Un service impeccable ! Je suis ravi du travail effectué. Très professionnel et à l'écoute.",
    },
    {
      name: "Dina la Blonde Officielle",
      text: "Mon photographe👍. Merci beaucoup pour les travaux de la dernière fois. Nous sommes tellement satisfaits.",
    },
    {
      name: "HK Event & Pro",
      text: "Rendez-vous à la deuxième édition du festival Prise de Vues. Nous avons adoré la dernière fois👌.",
    },
    {
      name: "Christ Josué",
      text: "Je veux remercier mon chargé de communication, celui qui prend les photos pendant nos programmes. Merci beaucoup pour la considération pour ma personne et mon équipe.",
    },
  ];

  return (
    <section className="py-5 " data-aos="fade-up" data-aos-delay="200">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Ce que disent nos clients</h2>
        <Carousel indicators={false} interval={5000}>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <Card style={{ maxWidth: "600px" }} className="shadow border-none p-3">
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold">{review.name}</Card.Title>
                    <Card.Text className="text-muted">"{review.text}"</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Commentaire;
