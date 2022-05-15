import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Baseurl } from "../constants/Api";
import DetailItem from "./DetailItem";
import Heading from "../layout/Heading";

function DetailAccommodations() {
  const [accommodations, setAccommodation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(
          Baseurl + "api/Accommodations/" + params.id + "?populate=*"
        );

        if (response.ok) {
          const json = await response.json();
          setAccommodation(json.data.attributes);
        } else if (response.status === 404) {
          setError(`No accommodation found with ID ${params.id}`);
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Spinner animation="grow" variant="info" className="loader" />;
  }

  if (error) {
    return <Alert variant="danger">An error occured: {error}</Alert>;
  }

  const { id, title, description, price, picture } = accommodations;

  return (
    <div className="details__container">
      <Container>
        <Heading content={title} />
        <Row>
          <DetailItem
            key={id}
            title={title}
            description={description}
            price={price}
            picture={picture.data.attributes.url}
          />
        </Row>
      </Container>
    </div>
  );
}

export default DetailAccommodations;
