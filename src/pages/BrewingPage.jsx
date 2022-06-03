import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function BrewingPage() {
  const [brewing, setBrewing] = useState([]);

  const { getToken } = useContext(AuthContext);

  const fetchApi = () => {
    const token = getToken();
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/brewing`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBrewing(response.data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <button onClick={fetchApi}>Get Brewing</button>
      {brewing.map((el) => {
        return <h1>{el.title}</h1>;
      })}
    </div>
  );
}

export default BrewingPage;
