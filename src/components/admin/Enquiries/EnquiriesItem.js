import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import EnquiriesDelete from "./EnquiriesDelete";

function EnquiriesItem({ id, name, email, accommodation, message }) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Regarding: {accommodation}</Card.Title>
          <div>
            <h5 className="name">Name:</h5>
            <p>{name}</p>
            <h5 className="name">Message:</h5>
            <p>{message}</p>
            <h5 className="name">Email</h5>
            <p>{email}</p>
          </div>
          <EnquiriesDelete id={id} />
        </Card.Body>
      </Card>
    </Col>
  );
}

EnquiriesItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  accommodation: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default EnquiriesItem;
