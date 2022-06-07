import styled from "styled-components";
import React from "react";

const CardTag = styled.div`
  /* width: 100vw;
  height: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: white;

  .brewingImg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

function BrewingCard(props) {
  return (
    <CardTag>
      <div></div>
      <img className="brewingImg" src={props.image} alt="coffeeImage" />
    </CardTag>
  );
}

export default BrewingCard;
