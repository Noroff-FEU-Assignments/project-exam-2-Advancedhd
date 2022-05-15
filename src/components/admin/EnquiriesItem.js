import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function EnquiriesItem({ name, email, accommodation, message }) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Regarding: {accommodation}</Card.Title>
          <Card.Text>
            <h5 className="enquirie__name">Name:</h5>
            <p>{name}</p>
            <h5 className="enquirie__message">Message:</h5>
            <p>{message}</p>
            <h5 className="enquirie__email">Email</h5>
            <p>{email}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

EnquiriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  accommodation: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default EnquiriesItem;
