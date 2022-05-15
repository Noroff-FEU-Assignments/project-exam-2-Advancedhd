import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import SearchBar from "./SearchBar";
import AuthContext from "../context/Auth";

function Navigationbar() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setAuth(null);
    navigate.push("/");
  }

  return (
    <>
      <Row>
        <Navbar bg="black" expand="lg">
          <Navbar.Brand href="/">
            <img
              className="logo"
              src="/HolidazeLogo.png"
              alt="Logo of Holidaze"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
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
                  <Button onClick={logout}>Log Out</Button>
                </>
              ) : (
                <NavLink to="/Login">Login</NavLink>
              )}
            </Nav>
            <SearchBar />
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </>
  );
}

export default Navigationbar;
