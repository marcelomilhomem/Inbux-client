import styled from "styled-components";
import React from "react";

const CardTag = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1e3932;
  color: white;


`;

function BrewingCard(props) {
  return (
    <CardTag>
      <img className="brewingImg" src={props.image} alt="coffeeImage" />
      <span>{props.title}</span>
    </CardTag>
  );
}

export default BrewingCard;
