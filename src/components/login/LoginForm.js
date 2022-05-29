import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Baseurl } from "../constants/Api";
import { Container, Form, Button } from "react-bootstrap";
import Heading from "../layout/Heading";
import AuthContext from "../context/Auth";
import Error from "../common/Error";

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(Baseurl + "api/auth/local", data);
      setAuth(response.data);
      navigate("/Admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(<h3 className="error">Wrong Username or Password</h3>);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="login__background">
      <Container>
        <Heading content="Login" />
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group
            className="mb-3"
            controlId="formBasicIdentifier"
            disabled={submitting}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="identifier"
              placeholder="Email"
              {...register("identifier")}
            />
            {errors?.identifier && <Error>{errors.identifier.message}</Error>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors?.password && <Error>{errors.password.message}</Error>}
          </Form.Group>
          {loginError && <Error>{loginError}</Error>}
          <Button variant="primary" type="submit">
            {submitting ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </Container>
    </div>
  );
}
