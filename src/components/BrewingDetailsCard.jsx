import React from "react";
import styled from "styled-components";

const DetailTag = styled.div`
  .information {
    text-align: left;
  }

  th {
    padding: 5px;
  }

  .title {
    font-size: 15px;
  }

  .info {
    font-size: 10px;
  }
`;

function BrewingDetailsCard(props) {
  return (
    <DetailTag>
      <div>
        <img src={props.brew.image} alt="brewImage" />
        <h1>{props.brew.title}</h1>
      </div>
      <div className="information">
        <hr />
        <table>
          <tbody>
            <tr>
              <th>
                <b className="title">Coffee Grind</b>
              </th>
              <th className="info">{props.brew.coffeeGrind}</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>
                <b className="title">Quantity</b>
              </th>
              <th className="info">{props.brew.quantity}</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>
                <b className="title">Exatration Time</b>
              </th>
              <th className="info">{props.brew.extractionTime}min</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>
                <b className="title">Water Temperature</b>
              </th>
              <th className="info">{props.brew.waterTemperature}°C</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>
                <b className="title">Advice</b>
              </th>
              <th className="info">{props.brew.advice}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </DetailTag>
  );
}

export default BrewingDetailsCard;
