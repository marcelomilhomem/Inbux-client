import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";

function BrewingDetails() {
  const [brew, setBrew] = useState(null);
  const { brewingId } = useParams();

  const { getToken } = useContext(AuthContext);

  const getBrew = async () => {
    try {
      const token = getToken();
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/brewing/${brewingId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBrew(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrew();
  }, []);

  const DetailTag = styled.div`
    .information {
      text-align: left;
    }

    th {
      padding: 5px;
    }

    .title {
      font-size: 25px;
    }

    .info {
      font-size: 10px;
    }
  `;

  return (
    <div>
      {brew && (
        <DetailTag>
          <div>
            <img src={brew.image} alt="brewImage" />
            <h1>{brew.title}</h1>
          </div>
          <div className="information">
            <hr />
            <table>
              <tr>
                <th>
                  <b className="title">Coffee Grind</b>
                </th>
                <th className="info">{brew.coffeeGrind}</th>
              </tr>
              <tr>
                <th>
                  <b className="title">Quantity</b>
                </th>
                <th className="info">{brew.quantity}</th>
              </tr>
              <tr>
                <th>
                  <b className="title">Exatration Time</b>
                </th>
                <th className="info">{brew.extractionTime}min</th>
              </tr>
              <tr>
                <th>
                  <b className="title">Water Temperature</b>
                </th>
                <th className="info">{brew.waterTemperature}°C</th>
              </tr>
              <tr>
                <th>
                  <b className="title">Advice</b>
                </th>
                <th className="info">{brew.advice}</th>
              </tr>
            </table>
          </div>
        </DetailTag>
      )}
    </div>
  );
}

export default BrewingDetails;
