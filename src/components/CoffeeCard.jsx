import styled from "styled-components";
import React from "react";

function CoffeeCard(props) {
  return (
    <div>
      <div>
      <span>Coffee Title</span>
        <img src={props.coffeeImg} alt="coffeeImage" />
        <span>Coffee Origin</span>
        <span>Coffee Roast</span>
      </div>
    </div>
  );
}

export default CoffeeCard;
