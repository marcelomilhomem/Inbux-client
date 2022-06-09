import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import BrewingCard from "../components/BrewingCard";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 35px;
  &:hover {
    background-color: white;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
  }
`;

const BrewDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 90vh;

  @media (min-width: 650px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const DivColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EachBrew = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.squarespace-cdn.com/content/v1/52d26cede4b02dafb0c7af72/1397613144314-1PA9PX4SM7I4D93XM3TD/AlexLoft_Mural+detail2+%5BFinalDay%5D.jpg?format=1500w");
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
    <DivColumn>
      <div>
        <h1>BREWING</h1>
      </div>
      <BrewDiv>
        {brewing.map((brew) => {
          return (
            <EachBrew>
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
            </EachBrew>
          );
        })}
      </BrewDiv>
    </DivColumn>
  );
}

export default BrewingPage;
