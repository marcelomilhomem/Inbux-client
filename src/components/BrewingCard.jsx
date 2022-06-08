import styled from "styled-components";
import React from "react";

const CardTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;

  background-image: url("https://images.squarespace-cdn.com/content/v1/5dffb958c98183136d099a01/1581620035786-3XASHAP4R6T3K6HIR5EN/jordan+kay+starbucks+sumatra+coffee+flat.jpg?format=1500w");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

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
