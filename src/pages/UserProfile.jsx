import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import EditUserForm from "../components/EditUserForm";
import styled from "styled-components";

const ImgSize = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 10px;
  width: 90vw;
  height: 80vh;
`;

const ButtonEdit = styled.button`
  background-color: #678d70;
  padding: 10px 15px;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 6px;

  &:hover {
    background-color: #C7DDCC;
  }
`;

function UserProfile() {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getUser = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      setCurrentUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <>
      {currentUser && (
        <ProfileDiv>
          <h1>Hello, {currentUser.username}</h1>
          <ImgSize src={currentUser.imgUrl} alt="userImage" />
          <ButtonEdit onClick={() => setShowForm(!showForm)}>
            {showForm ? "Hide Edit Form" : "Edit User"}
          </ButtonEdit>

          {showForm && <EditUserForm currentUser={currentUser} />}
        </ProfileDiv>
      )}
    </>
  );
}

export default UserProfile;
