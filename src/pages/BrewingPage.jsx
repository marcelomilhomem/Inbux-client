import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import BrewingCard from "../components/BrewingCard";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: white;
  color: black;
  font-size: 35px;
`;

const ButtonDiv = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
`;

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
            {" "}
            <Link
              to={`/brewing/${brew._id}`}
              style={{ textDecoration: "none" }}
            >
              <BrewingCard key={brew._id} {...brew} />
              <ButtonDiv>
                <Button className="brew-title">{brew.title}</Button>
              </ButtonDiv>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default BrewingPage;
