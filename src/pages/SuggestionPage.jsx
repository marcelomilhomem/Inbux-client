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
  background-color: rgba(0, 0, 0, .6);
  padding: 10px;
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
  background-color: rgba(255,255,255, .9);
  padding: 20px;
  border-radius: 6px;

  input {
    width: 200px;
    height: 25px;
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">First&Last Name</label>
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
