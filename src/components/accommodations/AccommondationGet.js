import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Baseurl } from "../constants/Api";
import AccommodationItem from "./AccommodationItem";
import Heading from "../layout/Heading";

function AccommondationGet() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(Baseurl + "api/Accommodations?populate=*");

        if (response.ok) {
          const json = await response.json();
          setAccommodations(json.data.slice(0, 3));
        } else {
          setError("A server error occured");
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

  return (
    <div className="accommodation__container">
      <Container>
        <Heading content="Popular Accommodations" />
        <Row>
          {accommodations?.map(function (accommodation) {
            const { id, attributes } = accommodation;
            return (
              <AccommodationItem
                key={id}
                id={id}
                title={attributes.title}
                description={attributes.description}
                price={attributes.price}
                picture={attributes.picture.data.attributes.url}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default AccommondationGet;
