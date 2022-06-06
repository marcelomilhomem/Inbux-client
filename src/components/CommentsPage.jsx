import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

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
    <div className="AddProject">
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          name="comment"
          cols="30"
          rows="10"
          value={comment}
          onChange={handleComment}
        ></textarea>

        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

export default CommentsPage;
