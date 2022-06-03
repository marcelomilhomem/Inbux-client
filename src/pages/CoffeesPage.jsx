import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import CoffeeCard from "../components/CoffeeCard";

function CoffeesPage() {
  const [coffee, setCoffee] = useState([]);

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
        setCoffee(response.data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <button onClick={fetchApi}>Get Coffees</button>
      {coffee.map((el) => {
        return (
            <>
                <CoffeeCard {...el}/>
            </>
        )
      })}
    </div>
  );
}

export default CoffeesPage;
