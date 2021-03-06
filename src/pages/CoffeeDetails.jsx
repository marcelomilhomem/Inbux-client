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
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 252, 0.52),
      rgba(0, 0, 0, 0.73)
    ),
    url("https://stories.starbucks.com/uploads/2019/01/artist-series-1-002-1.jpg");
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
    height: 400px;
    overflow-y: scroll;
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
    background-color: white;
  }

  .coffeeDetailImg {
    width: 250px;
    border-radius: 6px;
  }
`;

const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  gap: 1rem;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  height: 350px;
  overflow-y: scroll;
  margin-bottom: 30px;
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

  .delete-button {
    background: none;
    font-size: 9px;
    border: none;
    padding: 3px;
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
  width: 90%;
  border-top: 0.3px solid black;
  border-color: rgba(0, 0, 0, 0.1);

  .user-name {
    font-size: 10px;
  }

  .text-comment {
    font-size: 13px;
  }
`;

const CoffeTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 650px) {
    flex-direction: row;
  }
`;

function CoffeeDetails() {
  const [coffee, setCoffee] = useState(null);
  const { coffeeId } = useParams();

  const { getToken, user } = useContext(AuthContext);
  const token = getToken();

  const getCoffee = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/coffees/${coffeeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCoffee(response.data);
      /* await coffee.comments.reverse(); */
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/comment/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoffee();
  }, [deleteComment]);

  return (
    <div>
      {coffee && (
        <DetailTag>
          <h1>{coffee.title}</h1>
          <CoffeTable>
            <img
              className="coffeeDetailImg"
              src={coffee.detailImg}
              alt="coffeImageDescription"
            />
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
          </CoffeTable>

          <div className="secondDiv">
            <h1>About</h1>
            <p>{coffee.description}</p>
          </div>
          <CommentsDiv>
            <CommentsPage coffeeId={coffee._id} getCoffee={getCoffee} />
            <AllComments>
              {coffee.comments
                .map((comment) => {
                  return (
                    <UserDiv>
                      <img
                        className="user-profile-image"
                        src={comment.author.imgUrl}
                        alt="userprofileimage"
                      />
                      <UserNameComment>
                        <p className="user-name">{comment.author.username}</p>
                        <p className="text-comment" key={comment.comment._id}>
                          {comment.comment}
                        </p>
                        {comment.author._id === user._id && (
                          <button
                            className="delete-button"
                            onClick={() => deleteComment(comment._id)}
                          >
                            Delete Comment
                          </button>
                        )}
                      </UserNameComment>
                    </UserDiv>
                  );
                })
                .reverse()}
            </AllComments>
          </CommentsDiv>
        </DetailTag>
      )}
    </div>
  );
}

export default CoffeeDetails;
