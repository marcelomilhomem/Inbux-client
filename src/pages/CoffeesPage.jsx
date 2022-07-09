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
`;

const DivT = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-image: url("https://courses-emea.starbucksglobalacademy.com/assets/courseware/v1/ffdb98b2d191a18439e8870d7a830229/asset-v1:EMEA+CA100+2019+type@asset+block/CA100_M2.1_TheGIantPotentialoftheTinyCoffeeBean0_reduced.jpg");
  background-attachment: fixed;

  h1 {
    margin-top: 20px;
  }

  @media (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-image: url("https://courses-emea.starbucksglobalacademy.com/assets/courseware/v1/ffdb98b2d191a18439e8870d7a830229/asset-v1:EMEA+CA100+2019+type@asset+block/CA100_M2.1_TheGIantPotentialoftheTinyCoffeeBean0_reduced.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    margin: 2px;
    border: 6px;
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
