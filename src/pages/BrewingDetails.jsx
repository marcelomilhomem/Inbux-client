import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import BrewingDetailsCard from "../components/BrewingDetailsCard";

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

  return (
    <div>
      {brew && (
        <BrewingDetailsCard brew={brew} />
      )}
    </div>
  );
}

export default BrewingDetails;
