import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Alert,
  Spinner,
} from "react-bootstrap";
import AlertComponent from "../components/UI/Alert";
import Loading from "../components/UI/Loading";
import Title from "../components/UI/Title";

const App: React.FC<any> = () => {
  // State
  const [productList, setProductList] = React.useState<any[]>([
    {
      id: 1,
      name: "Montre pour enfant",
      image: "produit1.jpg",
      description:
        "Montre Intelligente pour Enfants 7 Jeux - Musique MP3 Montre Enfants Fille Garçon.",
      price: 1250,
      stock: 3,
    },
    {
      id: 2,
      name: "Bracelet pour montre",
      image: "bracelet.jpg",
      description:
        "Fullmosa Bracelet Cuir Montre Femme Homme Fixation Rapide, Axus Series Watch Bracelet. ",
      price: 2990,
      stock: 12,
    },
    {
      id: 3,
      name: "DVD BluRay",
      image: "dvd.jpg",
      description:
        "DVD hyper top Musique MP3 Montre Enfants Fille Garçon. Musique MP3 Montre Enfants Fille Garçon.",
      price: 3990,
      stock: 10,
    },
  ]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);

  // Render
  return (
    <>
      {hasError ? (
        <AlertComponent
          title={"Erreur du serveur"}
          text={"Veuillez réessayer plus tard."}
          bg={"danger"}
        />
      ) : (
        <Container>
          <Row>
            <Title text={"Catalogue en ligne"} />
            <Col className="text-end">
              <span>Total : {productList.length}</span>
            </Col>
          </Row>
          <Row>
            {isLoading ? (
              <Loading text={"Chargement en cours..."} />
            ) : (
              <>
                {!productList.length && (
                  <>
                    <AlertComponent text={"Aucune données..."} bg={"info"} />
                  </>
                )}

                {productList.map((product) => (
                  <Col key={product.id} lg={3}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={"../src/assets/img/products/" + product.image}
                        className="thumbnail p-3"
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>
                          <strong>
                            {product.price}
                            <sup>F</sup>
                          </strong>
                        </Card.Text>
                        <Button variant="primary">Ajouter au panier</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default App;
