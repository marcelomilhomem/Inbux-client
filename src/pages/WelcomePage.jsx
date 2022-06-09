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

  .tristan {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .welcomeDiv {
    background-image: url("https://stories.starbucks.com/wp-content/uploads/2019/01/artist-series-1-004-1.jpg");
    background-size: cover;
    background-position: center;
    color: white;
    height: 100vh;
  }

  .Img {
    width: 350px;
    height: 280px;
    border-radius: 30%;
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .tristan-div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  .tristanLink {
    text-decoration: none;
    color: black;
    border: 1px solid black;
    width: max-content;
    padding: 5px;
    border-radius: 10px;
    &:hover {
      background-color: #1e3932;
      color: white;
    }
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
          src="https://stories.starbucks.com/wp-content/uploads/2019/01/artist-series-1-021-1.jpg"
          alt="marketImg"
        />
        <div className="suggestion-text">
          The purpose of this site is to have all Starbucks core coffees and
          share as much information as possible. And also learn more from the
          comments of other users. I worked 5 years in Starbucks I think this
          will be very useful.
          <p></p>About me: Sumatra is my favourite coffee.
        </div>
        <Link to="/coffees">
          <ButtonTag>Coffees</ButtonTag>
        </Link>
        <p>12 Coffess</p>
      </div>
      <hr />
      <div className="tristan-div">
        <p>Site style inspired in</p>
        <a
          className="tristanLink"
          href="https://www.tristaneaton.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tristan Eaton
        </a>
        <img
          className="tristan"
          src="https://stories.starbucks.com/wp-content/uploads/2019/01/sumatra-1905-1.jpg"
          alt=""
        />
      </div>
      <hr />
      <div className="firstSection secondSection">
        <h1 className="quotes suggestion">SUGGESTIONS</h1>
        <div className="suggestion-text">
          Its hard to provide all the information that we wanted. Thats why you
          guys can help us leaving suggestions in the suggestion page.
          <Link to="/submit-suggestion">
            <ButtonTag>Leave a Suggestion</ButtonTag>
          </Link>
        </div>
      </div>
    </HomeTag>
  );
}

export default WelcomePage;
