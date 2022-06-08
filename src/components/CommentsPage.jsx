import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 220px;
  height: 30px;
  border: none;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  background-color: white;
`;

const Button = styled.button`
  border: none;
  background: white;
  padding: 7px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  color: #eac67a;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CommentsPage(props) {
  const [comment, setComment] = useState("");
  const { coffeeId, getCoffee } = props;

  const { getToken } = useContext(AuthContext);

  const handleComment = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { comment };
    const token = getToken();

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/post/${coffeeId}/comment`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setComment("");
        getCoffee();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TextArea
          name="comment"
          cols="30"
          rows="10"
          placeholder="Write your comment here."
          value={comment}
          onChange={handleComment}
        ></TextArea>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default CommentsPage;
