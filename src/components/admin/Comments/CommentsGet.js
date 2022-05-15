import { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Baseurl } from "../../constants/Api";
import CommentsItem from "./CommentsItem";
import Heading from "../../layout/Heading";
import AuthContext from "../../context/Auth";

function CommentsGet() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth] = useContext(AuthContext);
  if (!auth) {
    window.location = "/";
  }

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(Baseurl + "api/comments");

        if (response.ok) {
          const json = await response.json();
          setComments(json.data);
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
    <div className="comments__container">
      <Container>
        <Heading content="Comments" />
        <Row>
          {comments?.map(function (comment) {
            const { id, attributes } = comment;
            return (
              <CommentsItem
                key={id}
                id={id}
                name={attributes.name}
                email={attributes.email}
                message={attributes.message}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CommentsGet;
