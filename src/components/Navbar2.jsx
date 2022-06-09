import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar2() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Inbux
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {isLoggedIn && (
              <>
                <Nav.Link eventKey="0" as={Link} to="/coffees">
                  Coffees
                </Nav.Link>
                <Nav.Link eventKey="1" as={Link} to="/brewing">
                  Brewing
                </Nav.Link>
                <Nav.Link eventKey="2" as={Link} to="/submit-suggestion">
                  Leave Suggestion
                </Nav.Link>
                <Nav.Link eventKey="3" as={Link} to="/profile">
                  {user.username}
                </Nav.Link>
                <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
              </>
            )}

            {!isLoggedIn && (
              <>
                <Nav.Link eventKey="4" as={Link} to="/signup">
                  Signup
                </Nav.Link>
                <Nav.Link eventKey="5" as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
