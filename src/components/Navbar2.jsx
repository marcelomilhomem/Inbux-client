import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navbar2() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Inbux</Navbar.Brand>
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
                <Nav.Link href="/coffees">Coffees</Nav.Link>
                <Nav.Link href="/brewing">Brewing</Nav.Link>
                <Nav.Link href="/submit-suggestion">Leave Suggestion</Nav.Link>
                <Nav.Link href="/profile">{user.username}</Nav.Link>
                <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
              </>
            )}

            {!isLoggedIn && (
              <>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
