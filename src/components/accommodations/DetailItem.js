import { useState } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import BookModal from "./BookModal";

function DetailItem({ title, description, price, picture }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="desktop__details">
        <Container>
          <BookModal title={title} handleClose={handleClose} show={show} />
          <Row>
            <Col>
              <img variant="top" alt={picture} src={picture}></img>
            </Col>
            <Col>
              <p>{description}</p>
              <p className="price">Price: {price} NOK</p>
              <Button onClick={handleShow}>Book</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mobile__details">
        <Container>
          <BookModal title={title} handleClose={handleClose} show={show} />
          <Row>
            <Col>
              <img variant="top" alt={picture} src={picture}></img>
              <p>{description}</p>
              <p className="price">Price: {price} NOK</p>
              <Button onClick={handleShow}>Book</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};

export default DetailItem;
