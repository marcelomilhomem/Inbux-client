import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import BrewingCard from "../components/BrewingCard";

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

  useEffect(() => {
    fetchApi();
  }, []);
  
  return (
    <div>
      {brewing.map((brew) => {
        return (
          <>
            <BrewingCard key={brew._id} {...brew} />
            <Link to={`/brewing/${brew._id}`}>
              <h3>{brew.title}</h3>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default BrewingPage;
