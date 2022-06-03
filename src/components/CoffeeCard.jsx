import styled from "styled-components";
import React from "react";

function CoffeeCard(props) {
  return (
    <div>
      <div>
        <img src={props.coffeeImg} alt="coffeeImage" />
        <span>Coffee Title</span>
        <span>Coffee Origin</span>
        <span>Coffee Roast</span>
      </div>
      <div>
        <span>Coffee Description</span>
      </div>
      <div>
        <span>Coffee Processing</span>
        <span>Coffee Body</span>
        <span>Coffee Acidity</span>
        <span>Coffee Blend</span>
      </div>
      <div>
        <span>Comments</span>
      </div>
    </div>
  );
}

export default CoffeeCard;
