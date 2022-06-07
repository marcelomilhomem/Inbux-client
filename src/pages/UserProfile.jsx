import { useContext, useState, useNavigate } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function UserProfile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const body = { username, imgUrl };
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, imgUrl } = body;

    axios
      .put(`${process.env.REACT_APP_API_URL}/user/${user._id}`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/profile");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div>
      <img src={imgUrl} alt="" />
      <h1>{username}</h1>
      <button onSubmit={handleSubmit}>Edit</button>
    </div>
  );
}

export default UserProfile;
