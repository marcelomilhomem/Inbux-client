import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 220px;
  height: 30px;
  border: none;
`;

const Button = styled.button`
  border: none;
  background: none;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

function SuggestionPage() {
  const [comment, setComment] = useState("");

  const { getToken } = useContext(AuthContext);

  const handleComment = (e) => setComment(e.target.value);

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
    <div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="comment">Form</label>
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

export default SuggestionPage;
