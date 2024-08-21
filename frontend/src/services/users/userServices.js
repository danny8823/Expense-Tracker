import axios from "axios";
import { BASE_URL } from "../../utils/url";
import second from 'axios'

// ! ========================LOGIN=================================== 
export const loginAPI = async({email,password})=>{
    const response = await axios.post(`${BASE_URL}/users/login`,{
        email,
        password
    })
    // RETURN A PROMISE
    return response.data

}