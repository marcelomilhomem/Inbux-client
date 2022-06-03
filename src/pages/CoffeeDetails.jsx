import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function CoffeeDetails() {
  const [coffee, setCoffee] = useState(null);
  const { coffeeId } = useParams();

  const { getToken } = useContext(AuthContext);

  const getCoffee = async () => {
    try {
      const token = getToken();
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/coffees/${coffeeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCoffee(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoffee();
  }, []);

  return (
    <div>
      {coffee && (
        <>
          <h1>{coffee.title}</h1>
          <h1>XICO</h1>
          <button>Comment</button>
        </>
      )}
    </div>
  );
}

export default CoffeeDetails;
