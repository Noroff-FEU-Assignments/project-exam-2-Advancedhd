import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import { Baseurl } from "../constants/Api";
import axios from "axios";
import Heading from "../layout/Heading";

export default function CommentsPost() {
  const [callback, setCallback] = useState(false);

  const [errorsCallback, setErrors] = useState();

  const messageRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  let timeout = "";
  const invokeTimeout = () => {
    timeout = setTimeout(() => {
      setCallback(false);
    }, 3000);
  };

  function postComment(event) {
    setErrors({});
    event.preventDefault();
    let errors = {
      name: { message: null },
      email: { message: null },
    };

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    // check names and lengths
    if (name === "") {
      errors.name.message = "Please provide a name!";
    }
    if (name.length < 3) {
      errors.name.message = "Name need to be 3 or longer.";
    }
    //check for valid email
    const emailReg = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    if (!email.match(emailReg)) {
      errors.email.message = "Please provide a valid email!";
    }

    if (!errors?.name?.message && !errors?.email?.message) {
      axios
        .post(Baseurl + "api/comments", {
          data: {
            name: name,
            email: email,
            message: message,
          },
        })
        .then(function (response) {
          setCallback("Success!");
        })
        .catch(function (error) {
          console.log(error);
          setCallback("Oh NO!");
        });
      clearTimeout(timeout);
      invokeTimeout();
    } else {
      setErrors(errors);
    }
  }

  return (
    <div className="commentspost__container">
      <Container>
        <Heading content="Contact Us!" />
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>Firstname*</Form.Label>
            <Form.Control
              type="firstname"
              placeholder="Enter your fullname"
              ref={nameRef}
            />
            <h5 className="error">
              {errorsCallback?.name ? errorsCallback?.name.message : null}
            </h5>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
            />
            <h5 className="error">
              {errorsCallback?.email ? errorsCallback?.email.message : null}
            </h5>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicMessage exampleForm.ControlTextarea1"
          >
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="Message"
              placeholder="Enter your Message"
              as="textarea"
              rows={6}
              ref={messageRef}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(event) => postComment(event)}
          >
            Submit
          </Button>
          <div className="booking_success">{callback ? callback : null}</div>
        </Form>
      </Container>
    </div>
  );
}
