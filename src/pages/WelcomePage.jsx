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
  `;
  const HomeTag = styled.div`
    .welcomeDiv {
      background-image: url("https://images.unsplash.com/photo-1613399421011-1e634fa4dacc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");
      background-size: cover;
      background-position: center;
      color: white;
      height: 100vh;
    }

    .pikeImg {
      width: 280px;
      height: 280px;
    }

    .firstSection {
      color: #1e3932;
      display: flex;
      gap: 2rem;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    h1 {
      margin-top: 10px;
    }

    .quote {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 70vh;
    }

    .coffeeTreeImg {
      width: 250px;
      border-radius: 10px;
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
        <h1>ABOUT US</h1>
        <img
          className="pikeImg"
          src="https://i.pinimg.com/564x/80/c5/79/80c579eb8382503040adc20f5891a0a4.jpg"
          alt="marketImg"
        />
        <p>
          The purpose of this site is to have all Starbucks core coffees and
          share as much information as possible. And also learn more from the
          comments of other users.
        </p>
        <Link to="/coffees">
          <ButtonTag>Coffees</ButtonTag>
        </Link>
      </div>
      <hr />
      <div>
        <p>Suggestions</p>
        <img className="coffeeTreeImg" src="https://images.unsplash.com/photo-1586095516671-d085ff58cdd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="coffeeTree" />
        <p>
          Its hard to provide all the information that I wanted. Thats why you
          guys can help me leaving a suggestions in the suggestion page.
        </p>
      </div>
    </HomeTag>
  );
}

export default WelcomePage;
