import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import styled from "styled-components";

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.squarespace-cdn.com/content/v1/5dffb958c98183136d099a01/1581620035786-3XASHAP4R6T3K6HIR5EN/jordan+kay+starbucks+sumatra+coffee+flat.jpg?format=1500w");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  .signup {
    background-color: #1e662e;
    width: 235px;
    align-self: center;
    border-radius: 6px;
    padding: 20px 10px;
    align-self: center;
    border-radius: 180px;
    color: white;
  }

  h1 {
    font-size: 50px;
    color: white;
  }
`;

const SignUpDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const LoginColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 300px;
  height: 500px;
  padding-top: 30px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Input1 = styled.input`
  padding: 15px 20px;
  border: none;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  width: 200px;
`;

const Input2 = styled.input`
  padding: 15px 20px;
  border: none;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  width: 200px;
`;

const Button = styled.button`
  border: none;
  width: 235px;
  padding: 10px 5px;
  border-radius: 6px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <LoginDiv>
          <LoginColumn>
            <h1>Login</h1>
            <div>
              <Input2
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleUsername}
              />
              <Input1
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <Button type="submit">Login</Button>
            <SignUpDiv>
              <Link
                className="signup"
                to="/signup"
                style={{ textDecoration: "none" }}
              >
                {" "}
                or Sign up
              </Link>
            </SignUpDiv>
          </LoginColumn>
        </LoginDiv>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Loginpage;
