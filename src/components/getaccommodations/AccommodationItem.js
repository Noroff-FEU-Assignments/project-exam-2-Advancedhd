import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import DeleteAccommodation from "./DeleteAccommodation";

function AccommodationItem({ id, title, description, price, picture }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <div className="description__container">
              <div className="description__text">{description}</div>
            </div>
            <p className="price">Price: {price} NOK</p>
            <Link to={`/detail/${id}`}>
              <Button variant="primary">Read More</Button>
            </Link>
            <DeleteAccommodation id={id} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

AccommodationItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};

export default AccommodationItem;
