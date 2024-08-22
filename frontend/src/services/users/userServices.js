import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

// ! GET THE TOKEN
const token = getUserFromStorage()

// ! ========================LOGIN=================================== 
export const loginAPI = async({email,password})=>{
    const response = await axios.post(`${BASE_URL}/users/login`,{
        email,
        password
    })
    // RETURN A PROMISE
    return response.data
}

// ! ========================REGISTER=================================== 
export const registerAPI = async({email,password,username})=>{
    const response = await axios.post(`${BASE_URL}/users/register`,{
        email,
        password,
        username
    })
    // RETURN A PROMISE
    return response.data
}

// ! ========================CHANGE PASSWORD=================================== 
export const changePasswordAPI = async(newPassword)=>{
    const response = await axios.put(`${BASE_URL}/users/change-password`,{
        newPassword
    },
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // RETURN A PROMISE
    return response.data
}

// ! ========================CHANGE PROFILE=================================== 
export const updateProfileAPI = async({email,username})=>{
    const response = await axios.put(`${BASE_URL}/users/change-profile`,{
        email,
        username
    },
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // RETURN A PROMISE
    return response.data
}