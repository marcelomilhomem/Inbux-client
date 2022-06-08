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
  gap: 1rem;

  span {
    text-align: left;
  }

  .firstDiv {
    width: 350px;
    color: black;
  }

  .secondDiv {
    background-color: #f2f0eb;
    height: max-content;
    width: 80vw;
    text-align: left;
    padding: 25px;
  }

  .secondDiv > p {
    margin-top: 8px;
  }

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

const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  gap: 1rem;
  padding: 10px;
  border-radius: 10px;
`;

const AllComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
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
          <h1>{coffee.title}</h1>
          <div className="information">
            <table>
              <tbody>
                <tr>
                  <th className="title">Origin:</th>
                  <th className="info">{coffee.origin}</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th className="title">Processing:</th>
                  <th className="info">{coffee.processing}</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th className="title">Roast:</th>
                  <th className="info">{coffee.roast}</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th className="title">Acidity:</th>
                  <th className="info">{coffee.acidity}</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th className="title">Body:</th>
                  <th className="info">{coffee.body}</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="secondDiv">
            <h1>About</h1>
            <p>{coffee.description}</p>
          </div>
          <CommentsDiv>
            <CommentsPage coffeeId={coffee._id} getCoffee={getCoffee} />
            <AllComments>
              {coffee.comments.map((comment) => {
                return <p key={comment.comment._id}>{comment.comment}</p>;
              })}
            </AllComments>
          </CommentsDiv>
        </DetailTag>
      )}
    </div>
  );
}

export default CoffeeDetails;
