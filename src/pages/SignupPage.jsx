import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function Signuppage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  const Input = styled.input`
    border: none;
    width: 200px;
    height: 36px;
  `;

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;
    gap: 1rem;

    button {
      width: max-content;
      background: none;
      border: none;
    }
  `;

  return (
    <Div className="SignupPage">
      <h1>Sign Up</h1>
      <Input
        type="text"
        name="username"
        value={username}
        onChange={handleUsername}
        placeholder="Username"
      />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={handlePassword}
        placeholder="Password"
      />
      <button type="submit" onClick={handleSubmit}>
        Sign Up
      </button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Already have an account?</p>
      <Link to="/login" style={{ textDecoration: "none" }}>
        {" "}
        Login
      </Link>
    </Div>
  );
}

export default Signuppage;
