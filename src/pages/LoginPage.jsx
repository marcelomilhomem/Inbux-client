import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import styled from "styled-components";

function Loginpage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
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
    <div>
      <Div>
        <h1>Login</h1>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <button onClick={handleSubmit} type="submit">
          Login
        </button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>Don't have an account?</p>
        <Link to="/signup" style={{ textDecoration: 'none' }}> Sign up</Link>
      </Div>
    </div>
  );
}

export default Loginpage;
