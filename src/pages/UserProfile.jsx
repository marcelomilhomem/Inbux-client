import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import EditUserForm from "../components/EditUserForm";
import styled from "styled-components";
import SuggestionList from "./SuggestionList";

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
  width: 80vw;
  height: 80vh;
  gap: 2rem;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
`;

const ButtonEdit = styled.button`
  background-color: #1e662e;
  padding: 10px 15px;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 6px;

  &:hover {
    background-color: black;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
        <Center>
          <ProfileDiv>
            <h1>Hello, {currentUser.username}</h1>
            <ImgSize src={currentUser.imgUrl} alt="userImage" />
            <ButtonEdit onClick={() => setShowForm(!showForm)}>
              {showForm ? "Hide Edit Form" : "Edit User"}
            </ButtonEdit>

            {showForm && <EditUserForm currentUser={currentUser} />}
            {currentUser.userType === "admin" && <SuggestionList />}
          </ProfileDiv>
        </Center>
      )}
    </>
  );
}

export default UserProfile;
