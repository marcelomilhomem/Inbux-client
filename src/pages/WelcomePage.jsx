import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

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

  @media (min-width: 650px) {
    .responsive {
      display: flex;
    }

    .firstSection > h1 {
      font-size: 20px;
    }

    .firstSection > Img {
      border-radius: 0px;
      width: 100%;
    }

    .tristan-div {
      width: 33.33%;
    }

    .firstSection {
      width: 33.33%;
    }

    .secondSection {
      width: 33.33%;
      justify-content: center;
      align-items: center;
    }
  }

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
    width: auto;
    height: 70vh;
  }

  .secondSection {
    background-image:linear-gradient(to bottom, rgba(255, 255, 252, 0.52), rgba(255, 255, 255, 0.73)), url("https://images.squarespace-cdn.com/content/v1/52d26cede4b02dafb0c7af72/1594844798967-OGPSDG4MLCSJGRZO7AWN/Final+Mural+photo+by+Matt+Eaton.jpg?format=1500w");
    background-position: center;
    color: white;
  }

  .suggestion {
    margin-top: 5px;
    color: black;
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
    border-bottom: 1px solid black;
    width: max-content;
    padding: 5px;
    &:hover {
      background-color: #1e3932;
      color: white;
    }
  }
`;

function WelcomePage() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <HomeTag>
      <div className="welcomeDiv">
        <h1 className="quote">Learning is a Journey, not a destination</h1>
        {isLoggedIn && <h1>Enjoy!</h1>}
        {!isLoggedIn && (
          <Link to="/signup">
            <ButtonTag>Join us</ButtonTag>
          </Link>
        )}
      </div>
      <div className="responsive">
        <div className="firstSection">
          <h1>A LITTLE ABOUT US</h1>
          <img
            className="Img"
            src="https://stories.starbucks.com/wp-content/uploads/2019/01/artist-series-1-021-1.jpg"
            alt="marketImg"
          />
          <div className="suggestion-text">
            The purpose of this site is to have all Starbucks core coffees and
            share as much information. In each coffee detail you're able to
            leave an comment with feedback or share more information. I worked 5
            years in Starbucks I think this will be very useful.
            <p>About me: Sumatra is my favourite coffee.</p>
          </div>
          {isLoggedIn && (
            <Link to="/coffees">
              <ButtonTag>Coffees</ButtonTag>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/login">
              <ButtonTag>Coffees</ButtonTag>
            </Link>
          )}
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
          <h1 className="quotes suggestion sug">SUGGESTIONS</h1>
          <div className="suggestion-text sug">
            Its hard to provide all the information that we wanted. Thats why
            you guys can help us leaving suggestions in the suggestion page.
            {isLoggedIn && (
              <Link to="/submit-suggestion">
                <ButtonTag>Leave a Suggestion</ButtonTag>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/login">
                <ButtonTag>Leave a Suggestion</ButtonTag>
              </Link>
            )}
          </div>
        </div>
      </div>
    </HomeTag>
  );
}

export default WelcomePage;
