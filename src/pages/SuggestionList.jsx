import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function SuggestionList() {
  const { getToken } = useContext(AuthContext);
  const [suggestions, setSuggestions] = useState([]);

  console.log(suggestions);

  const getSuggestions = () => {
    const token = getToken();

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/suggestion`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return <div>
      <h1>Hello world</h1>
  </div>;
}

export default SuggestionList;
