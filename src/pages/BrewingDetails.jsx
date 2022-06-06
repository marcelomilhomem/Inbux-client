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

  const DetailTag = styled.div``;

  return (
    <div>
      {brew && (
        <div>
          <img src={brew.image} alt="brewImage" />
          <h1>{brew.title}</h1>
        </div>
      )}
    </div>
  );
}

export default BrewingDetails;
