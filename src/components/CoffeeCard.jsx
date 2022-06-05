import styled from "styled-components";
import React from "react";

const CardTag = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1e3932;
  color: white;
  
  .coffeeImg {
    width: 140px;
    height: 120px;
  }
`;

function CoffeeCard(props) {
  return (
    <CardTag>
        <img className="coffeeImg" src={props.coffeeImg} alt="coffeeImage" />
        <span>{props.origin}</span>
    </CardTag>
  );
}

export default CoffeeCard;
