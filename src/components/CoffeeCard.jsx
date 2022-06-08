import styled from "styled-components";
import React from "react";

const CardTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 290px;

  &:hover {
    background-color: white;
  }

  .coffeeImg {
    width: 140px;
    height: 120px;
  }

  .img {
    width: 140px;
  }

  .title {
    width: 140px;
  }
`;

function CoffeeCard(props) {
  return (
    <CardTag>
      <div className="img">
        <img className="coffeeImg" src={props.coffeeImg} alt="coffeeImage" />
      </div>
      <div className="title">
        <h3 className="coffeeLink">{props.title}</h3>
      </div>
    </CardTag>
  );
}

export default CoffeeCard;
