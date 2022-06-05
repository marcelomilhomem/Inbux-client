import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import CoffeeCard from "../components/CoffeeCard";
import { Link } from "react-router-dom"

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
        console.log(response.data)
        setCoffees(response.data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <button onClick={fetchApi}>Get Coffees</button>
      {coffees.map((coffee) => {
        return (
            <>
                <CoffeeCard {...coffee}/>
                <Link to={`/coffees/${coffee._id}`}>
              <h3>{coffee.title}</h3>
              <h6>{coffee.origin}</h6>
            </Link>
            </>
        )
      })}
    </div>
  );
}

export default CoffeesPage;
