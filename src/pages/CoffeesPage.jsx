import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import CoffeeCard from "../components/CoffeeCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  const LinkTag = styled.div`
    .coffeeLink {
      text-decoration: none;
      color: white;
    }

    background-color: #1e3932;
  `;

  return (
    <div>
      {coffees.map((coffee) => {
        return (
          <>
            <CoffeeCard key={coffee._id} {...coffee} />
            <LinkTag>
              <Link to={`/coffees/${coffee._id}`} style={{ textDecoration: 'none' }}>
                <h3 className="coffeeLink">{coffee.title}</h3>
                <h6 className="coffeeLink">{coffee.origin}</h6>
              </Link>
            </LinkTag>
          </>
        );
      })}
    </div>
  );
}

export default CoffeesPage;
