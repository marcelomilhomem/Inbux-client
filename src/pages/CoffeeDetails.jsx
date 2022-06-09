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
  gap: 1rem;
  background-image: url("https://stories.starbucks.com/uploads/2019/01/artist-series-1-002-1.jpg");
  background-attachment: fixed;
  background-position: center;

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

  table {
    background-color: white;;
  }
`;

const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  gap: 1rem;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;

const AllComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: white;
  padding: 7px;
  border-radius: 6px;

  .user-profile-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const UserDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const UserNameComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 240px;

  .user-name {
    font-size: 12px;
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

  console.log(coffee);

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
                return (
                  <UserDiv>
                    <img
                      className="user-profile-image"
                      src={comment.author.imgUrl}
                      alt="userprofileimage"
                    />
                    <UserNameComment>
                      <p className="user-name">{comment.author.username}</p>
                      <p key={comment.comment._id}>{comment.comment}</p>
                    </UserNameComment>
                  </UserDiv>
                );
              })}
            </AllComments>
          </CommentsDiv>
        </DetailTag>
      )}
    </div>
  );
}

export default CoffeeDetails;
