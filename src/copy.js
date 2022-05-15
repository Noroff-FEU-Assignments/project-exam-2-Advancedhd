
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 

  console.log(errors);

  const invokeTimeout = () => {
    timeout = setTimeout(() => {
      handleClose();
      setCallback(false);
    }, 5000);
  };



const schema = yup.object().shape({
    firstname: yup
      .string()
      .required("Please enter your first name")
      .min(10, "Firstname must be atleast 10 characters."),
    email: yup
      .string()
      .required("Please enter an email address")
      .matches(
        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        "Enter a valid email address."
      ),
  });

<Container>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Make enquiry to {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicFirstname">
              <Form.Label>Firstname*</Form.Label>
              <Form.Control
                {...register("firstname")}
                type="firstname"
                placeholder="Enter your fullname"
                ref={nameRef}
              />
              {errors.firstname && (
                <span className="error">{errors.firstname.message}</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                ref={emailRef}
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAccommodation">
              <Form.Label>Accommodation</Form.Label>
              <Form.Control type="accommodation" placeholder={title} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicMessage exampleForm.ControlTextarea1"
            >
              <Form.Label>Message*</Form.Label>
              <Form.Control
                type="Message"
                placeholder="Enter your Message"
                as="textarea"
                rows={6}
                ref={messageRef}
              />
              {errors.message && (
                <span className="error">{errors.message.message}</span>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>