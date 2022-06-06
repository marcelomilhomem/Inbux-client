import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";
import CommentsPage from "../components/CommentsPage";

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

  const DetailTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;

    span {
      text-align: left;
    }

    .coffeeImg {
      width: 170px;
      height: 150px;
      margin-top: 10px;
    }

    .firstDiv {
      background-color: #1e3932;
      width: 100vw;
      color: white;
    }

    .secondDiv {
      background-color: #f2f0eb;
      height: 100vh;
      width: 100vw;
    }
  `;

  return (
    <div>
      {coffee && (
        <DetailTag>
          <div className="firstDiv">
            <img className="coffeeImg" src={coffee.coffeeImg} alt="coffeeImg" />
            <h1>{coffee.title}</h1>
            <p>Coffee Origin: {coffee.origin}</p>
            <p>Processing: {coffee.processing}</p>
            <p>Roast: {coffee.roast}</p>
            <p>Body: {coffee.body}</p>
            <p>Acidity: {coffee.acidity}</p>
          </div>
          <div className="secondDiv">
            <p>More about:</p>
            <p>{coffee.description}</p>
            <button>Comment</button>
            <CommentsPage coffeeId={coffee._id} getCoffee={getCoffee} />
            {coffee.comments.map((el) => {
              return <p>{el.comment}</p>;
            })}
          </div>
        </DetailTag>
      )}
    </div>
  );
}

export default CoffeeDetails;
