import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function WelcomePage() {
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
      background-image: url("https://images.unsplash.com/photo-1613399421011-1e634fa4dacc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");
      background-size: cover;
      background-position: center;
      color: white;
      height: 100vh;
    }

    .Img {
      width: 280px;
      height: 280px;
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

    .coffeImage {
      height: 100vh;
      width: 100vh;
    }

    .secondSection {
      background-color: #1e3932;
      color: white;
    }

    .suggestion {
      margin-top: 20px;
      border-bottom: 1px solid white;
      padding-bottom: 5px;
    }

    .suggestion-text {
      margin-bottom: 30px;
      width: 300px;
    }
  `;

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
          comments of other users.
        </div>
        <Link to="/coffees">
          <ButtonTag>Coffees</ButtonTag>
        </Link>
        <p>12 Coffess</p>
      </div>
      <div className="firstSection secondSection">
        <p className="suggestion">Suggestions</p>
        <img
          className="coffeeImage"
          src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="coffeImage"
        />
        <div className="suggestion-text">
          Its hard to provide all the information that we wanted. Thats why you
          guys can help us leaving suggestions in the suggestion page.
        </div>
      </div>
    </HomeTag>
  );
}

export default WelcomePage;
