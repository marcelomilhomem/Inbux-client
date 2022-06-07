import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";
import CommentsPage from "../components/CommentsPage";

const DetailTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;

  span {
    text-align: left;
  }

  .ImageDiv {
    background-image: url("https://stories.starbucks.com/wp-content/uploads/2019/01/sumatra-women-02-1.jpg");
    background-size: cover;
    width: 380px;
    height: 400px;
    background-position: center;
  }

  .firstDiv {
    width: 350px;
    color: black;
  }

  .secondDiv {
    background-color: #f2f0eb;
    height: 100vh;
    width: 100vw;
  }
`;

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
        <DetailTag>
          <div className="firstDiv">
            <h1>{coffee.title}</h1>
            <div className="ImageDiv"></div>
            {coffee.origin} |{coffee.processing} |{coffee.roast} |{coffee.body}|
            {coffee.acidity} |
          </div>
          <div className="secondDiv">
            <p>More about:</p>
            <p>{coffee.description}</p>
            <button>Comment</button>
            <CommentsPage coffeeId={coffee._id} getCoffee={getCoffee} />
            <button onClick={() => coffee._id}>X</button>
            {coffee.comments.map((el) => {
              return <p key={el.comment._id}>{el.comment}</p>;
            })}
          </div>
        </DetailTag>
      )}
    </div>
  );
}

export default CoffeeDetails;
