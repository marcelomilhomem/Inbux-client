import {useState} from 'react'
import axios from 'axios'
import { AuthContext } from "../context/auth.context";

function EditUserForm({currentUser}) {
    const [username, setUsername] = useState(currentUser.username);
    const [imgUrl, setImgUrl] = useState(currentUser.imgUrl);
    const [store, setStore] = useState(currentUser.store);
    const [isUploading, setIsUploading] = useState(false);   
    
    
    const handleUpload = async (e) => {
        try {
            setIsUploading(true)
            const uploadData = new FormData();
 
            uploadData.append("imageUrl", e.target.files[0]);

            const response = await axios.post(
              `${process.env.REACT_APP_API_URL}/upload`, uploadData
            );
            setImgUrl(response.data.fileUrl)
            setIsUploading(false)

          } catch (error) {
            console.log(error);
          }
    }    

const handleSubmit = async () => {
    try {
        if(isUploading) return

        const body = { username: username, store: store, imgUrl:imgUrl}
        const storedToken = localStorage.getItem("authToken");
        const response = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/user`, body,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
}

  return (
      <>
    <h1>EditUserForm</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="file" onChange={(e) => handleUpload(e)} />
        <button type='submit'>Edit User</button>
    </form>
    </>
  )
}

export default EditUserForm