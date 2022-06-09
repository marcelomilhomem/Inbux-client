import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .upload {
    display: none;
  }

  .uploadI {
    background-color: #ececec;
    padding: 10px 45px;
    border-radius: 6px;
  }

  .textI {
    padding: 10px;
  }

  button {
    border: none;
    background-color: #ececec;
    padding: 10px 63px;
    border-radius: 6px;
  }
`;

function EditUserForm({ currentUser }) {
  const [username, setUsername] = useState(currentUser.username);
  const [imgUrl, setImgUrl] = useState(currentUser.imgUrl);
  const [store, setStore] = useState(currentUser.store);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e) => {
    try {
      setIsUploading(true);
      const uploadData = new FormData();

      uploadData.append("imageUrl", e.target.files[0]);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/upload`,
        uploadData
      );
      setImgUrl(response.data.fileUrl);
      setIsUploading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (isUploading) return;

      const body = { username: username, store: store, imgUrl: imgUrl };
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/user`,
        body,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormDiv>
      <h1>Your Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          className="textI"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="uploadI">
          Select Image
          <p>
            <i class="fa-solid fa-camera"></i>
          </p>
          <input
            className="upload"
            type="file"
            onChange={(e) => handleUpload(e)}
          />
        </label>
        <button type="submit">Edit User</button>
      </form>
    </FormDiv>
  );
}

export default EditUserForm;
