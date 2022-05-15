import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DeleteComment from "./CommentDelete";

function EnquiriesItem({ id, name, email, message }) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Message from {name}</Card.Title>
          <div>
            <h5 className="name">Name:</h5>
            <p>{name}</p>
            <h5 className="message">Message:</h5>
            <p>{message}</p>
            <h5 className="email">Email</h5>
            <p>{email}</p>
            <DeleteComment id={id} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

EnquiriesItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default EnquiriesItem;
