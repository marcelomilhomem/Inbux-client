import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonTag = styled.button`
  border: none;
  background-color: #1e662e;
  color: white;
  border-radius: 20px;
  padding: 10px 25px;

  &:hover {
    background-color: #1e3932;
  }
`;
const HomeTag = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  .welcomeDiv {
    background-image: url("https://images.unsplash.com/photo-1606197180326-bd0bae1eec71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80");
    background-size: cover;
    background-position: center;
    color: white;
    height: 100vh;
  }

  .Img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
  }

  .firstSection {
    color: #1e3932;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }

  .quote {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 70vh;
  }

  .secondSection {
    background-color: #f2f0eb;
    color: white;
  }

  .suggestion {
    margin-top: 5px;
    color: black;
    &:hover {
      border-bottom: 10px solid black;
    }
  }

  .suggestion-text {
    margin-bottom: 30px;
    width: 300px;
    color: black;
    border-radius: 6px;
  }
`;

function WelcomePage() {
  return (
    <HomeTag>
      <div className="welcomeDiv">
        <h1 className="quote">Learning is a Journey, not a destination</h1>
        <Link to="/signup">
          <ButtonTag>Join us</ButtonTag>
        </Link>
      </div>
      <div className="firstSection">
        <h1>A LITTLE ABOUT US</h1>
        <img
          className="Img"
          src="https://i.pinimg.com/564x/80/c5/79/80c579eb8382503040adc20f5891a0a4.jpg"
          alt="marketImg"
        />
        <div className="suggestion-text">
          The purpose of this site is to have all Starbucks core coffees and
          share as much information as possible. And also learn more from the
          comments of other users. I worked 5 years in Starbucks I think this
          will be very useful.
        </div>
        <Link to="/coffees">
          <ButtonTag>Coffees</ButtonTag>
        </Link>
        <p>12 Coffess</p>
      </div>
      <div className="firstSection secondSection">
        <Link to="#" style={{ textDecoration: "none" }}>
          <h1 className="quotes suggestion">SUGGESTIONS</h1>
        </Link>
        <div className="suggestion-text">
          Its hard to provide all the information that we wanted. Thats why you
          guys can help us leaving suggestions in the suggestion page.
        </div>
      </div>
    </HomeTag>
  );
}

export default WelcomePage;
