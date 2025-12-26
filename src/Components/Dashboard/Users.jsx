import axios from "axios";
import { useEffect } from "react";
import { baseURL, USERS } from "../api/Api";
import Cookies from "universal-cookie";
import Logout from "../../Pages/Forms/Logout";

export default function Users() {
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("peoples"); 

    axios.get(`${baseURL}/${USERS}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
    <h1>Users</h1>
    <Logout />
    </div>
  );
}
