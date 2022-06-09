import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 220px;
  height: 100px;
  border: none;
`;

const Button = styled.button`
  border: none;
  background-color: #1e662e;
  padding: 10px 15px;
  color: white;
  border-radius: 10px;

  &:hover {
    background-color: black;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://stories.starbucks.com/wp-content/uploads/2019/01/artist-series-1-020-1.jpg");
  background-attachment: fixed;
  background-position: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 6px;

  input {
    width: 220px;
    height: 25px;
    border-radius: 6px;
  }

  p {
    width: 250px;
  }
`;

function SuggestionPage() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const { getToken } = useContext(AuthContext);

  const handleComment = (e) => setComment(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { comment };
    const token = getToken();

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/suggestion`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setComment("");
        setName("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <p>
          Please leave your comments and suggestion for us to improve. Thank You
        </p>
        <input
          type="name"
          name="name"
          value={name}
          placeholder="Your name"
          onChange={handleName}
        />
        <TextArea
          name="comment"
          cols="30"
          rows="10"
          placeholder="Leave your comment here. Thank you."
          value={comment}
          onChange={handleComment}
        ></TextArea>

        <Button type="submit">Submit</Button>
      </Form>
    </Div>
  );
}

export default SuggestionPage;
