import styled from "styled-components";
import React from "react";

const CardTag = styled.div`
  .brewingImg {
    width: 150px;
  }

  @media (min-width: 700px) {
    .brewingImg {
      width: 300px;
    }
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
