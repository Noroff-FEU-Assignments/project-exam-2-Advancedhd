import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../context/Auth";

function Footer() {
  const [auth] = useContext(AuthContext);

  return (
    <Row className="footer__container">
      <Navbar bg="black" expand="lg">
        <Nav className="me-auto my-2 my-lg-0 g-0" navbarScroll>
          <NavLink className="" to="/">
            Home
          </NavLink>
          <NavLink className="" to="/Contact">
            Contact
          </NavLink>

          <NavLink to="/Accommodation">Accommodation</NavLink>
          {auth ? (
            <>
              <NavLink className="" to="/Admin">
                Admin
              </NavLink>
            </>
          ) : (
            <NavLink to="/Login">Login</NavLink>
          )}
        </Nav>
      </Navbar>
    </Row>
  );
}

export default Footer;
