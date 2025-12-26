import axios from "axios"
import { baseURL, LOGOUT } from "../../Components/api/Api"
import Cookies from "universal-cookie"

export default function Logout() {
    
    const people = new Cookies()

    async function handlOut() {
        try {
            const res = await axios.get(`${baseURL}/${LOGOUT}`, {
                headers: {
                    Authorization: "Bearer " + people.get("peoples")
                }
            })
            console.log(res)
        }catch(error) {
            console.log(error)
        }
    }
    return(
        <button onClick={handlOut} className="px-3 text-green-500 hover:text-orange-500 transition font-extrabold active:scale-95">Log out</button>
    )
}