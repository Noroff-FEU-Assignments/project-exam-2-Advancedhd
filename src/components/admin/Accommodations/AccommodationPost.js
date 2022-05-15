import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import { Baseurl } from "../../constants/Api";
import axios from "axios";
import Heading from "../../layout/Heading";

export default function AccommodationPost() {
  const [callback, setCallback] = useState(false);
  const [files, setFiles] = useState();
  const [errorsCallback, setErrors] = useState();

  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);

  let timeout = "";
  const invokeTimeout = () => {
    timeout = setTimeout(() => {
      setCallback(false);
    }, 3000);
  };

  function postAccommodation(event) {
    setErrors({});
    event.preventDefault();
    let errors = {
      title: { message: null },
      price: { message: null },
      img: { message: null },
      desc: { message: null },
    };

    const formData = new FormData();
    try {
      formData.append("files", files[0]);
    } catch (e) {
      errors.img.message = "Please provide an image!";
    }

    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;

    // check names and lengths
    if (title === "") {
      errors.title.message = "Please provide accommodation name!";
    } else if (title.length < 3) {
      errors.title.message = "Accommodation need to be 3 or longer.";
    }

    if (description === "") {
      errors.desc.message = "Please provide accommodation description!";
    } else if (description.length < 10) {
      errors.desc.message =
        "Accommodation description need to be 10 or longer.";
    }
    //check for valid email

    if (isNaN(parseInt(price))) {
      errors.price.message = "Please provide only numbers";
    }

    if (
      !errors?.title?.message &&
      !errors?.price?.message &&
      !errors?.desc?.message &&
      !errors?.img?.message
    ) {
      axios.post(Baseurl + "api/upload", formData).then((response) => {
        const imageId = response.data[0].id;
        console.log(imageId);

        axios
          .post(Baseurl + "api/accommodations", {
            data: {
              title: title,
              price: price,
              description: description,
              picture: imageId,
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
      });
    } else {
      setErrors(errors);
    }
  }

  return (
    <div className="accommodationpost__container">
      <Container>
        <Heading content="Create Accommodation" />
        <Form className="accommodationpost__form" onSubmit={postAccommodation}>
          <Form.Group className="mb-3" controlId="formBasicAccommodation">
            <Form.Label>Name of Accommodation*</Form.Label>
            <Form.Control
              type="accommodation"
              placeholder="Enter Accommodation"
              ref={titleRef}
            />
            <h5 className="error">
              {errorsCallback?.title ? errorsCallback?.title.message : null}
            </h5>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price*</Form.Label>
            <Form.Control
              type="price"
              placeholder="Enter price"
              ref={priceRef}
            />
            <h5 className="error">
              {errorsCallback?.price ? errorsCallback?.price.message : null}
            </h5>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPicture">
            <Form.Label>Picture*</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter price"
              onChange={(e) => setFiles(e.target.files)}
            />
            <h5 className="error">
              {errorsCallback?.img ? errorsCallback?.img.message : null}
            </h5>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicDescription exampleForm.ControlTextarea1"
          >
            <Form.Label>Description*</Form.Label>
            <Form.Control
              type="description"
              placeholder="Enter your Description"
              as="textarea"
              rows={6}
              ref={descriptionRef}
            />
            <h5 className="error">
              {errorsCallback?.desc ? errorsCallback?.desc.message : null}
            </h5>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="booking_success">{callback ? callback : null}</div>
        </Form>
      </Container>
    </div>
  );
}
