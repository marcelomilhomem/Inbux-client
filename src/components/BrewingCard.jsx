import styled from "styled-components";
import React from "react";

const CardTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  .brewingImg {
    width: 250px;
  }


`;

function BrewingCard(props) {
  return (
    <CardTag>
      <img className="brewingImg" src={props.image} alt="coffeeImage" />
    </CardTag>
  );
}

export default BrewingCard;
