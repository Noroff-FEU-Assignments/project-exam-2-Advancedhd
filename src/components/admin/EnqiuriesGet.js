import { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Baseurl } from "../constants/Api";
import EnquiriesItem from "./EnquiriesItem";
import Heading from "../layout/Heading";
import AuthContext from "../context/Auth";

function EnquiriesGet() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth] = useContext(AuthContext);
  if (!auth) {
    window.location = "/";
  }

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(Baseurl + "api/Enquiries");

        if (response.ok) {
          const json = await response.json();
          console.log(json.data);
          setEnquiries(json.data);
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
    <div className="enquiries__container">
      <Container>
        <Heading content="Enquiries" />
        <Row>
          {enquiries?.map(function (enquirie) {
            const { id, attributes } = enquirie;
            return (
              <EnquiriesItem
                key={id}
                id={id}
                name={attributes.name}
                email={attributes.email}
                accommodation={attributes.accommodation}
                message={attributes.message}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default EnquiriesGet;
