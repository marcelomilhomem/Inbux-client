import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function WelcomePage() {
  const ButtonTag = styled.button`
    border: none;
    background-color: #1E662E ;
    color: white;
    border-radius: 20px;
    padding: 10px 25px;
  `;
  const HomeTag = styled.div`
    .welcomeDiv {
      background-image: url("https://cms.artcenter.edu/image/11208/0/0");
      background-size: cover;
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
  `;

  return (
    <HomeTag>
      <div className="welcomeDiv">
        {/* <p>Learning is a Journey, not a destination</p> */}
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
      <div>
        <p>Suggestions</p>
        <img src="" alt="" />
        <p>
          Its hard to provide all the information that I wanted. Thats why you
          guys can help me leaving a suggestions in the suggestion page.
        </p>
      </div>
    </HomeTag>
  );
}

export default WelcomePage;
