import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import CoffeeCard from "../components/CoffeeCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkTag = styled.div`
  .coffeeLink {
    text-decoration: none;
    color: black;
  }

  &:hover {
    background-color: #6a816f;
  }
`;

const DivT = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    margin-top: 20px;
  }
`;

function CoffeesPage() {
  const [coffees, setCoffees] = useState([]);

  const { getToken } = useContext(AuthContext);

  const fetchApi = () => {
    const token = getToken();
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/coffees`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setCoffees(response.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <DivT>
      <h1>Ours Coffee's</h1>
      {coffees.map((coffee) => {
        return (
          <>
            <LinkTag>
              <Link
                to={`/coffees/${coffee._id}`}
                style={{ textDecoration: "none" }}
              >
                <CoffeeCard key={coffee._id} {...coffee} />
              </Link>
            </LinkTag>
          </>
        );
      })}
    </DivT>
  );
}

export default CoffeesPage;
