import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

// ! GET THE TOKEN
const token = getUserFromStorage()
// ! ========================ADD=================================== 
export const addCategoryAPI = async({name,type})=>{
    const response = await axios.post(`${BASE_URL}/categories/create`,{
        name,
        type
    },{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // RETURN A PROMISE
    return response.data
}
// ! ========================UPDATE=================================
export const updateCategoryAPI = async ({name,type,id}) => {
    const response = await axios.put(`${BASE_URL}/categories/update/${id}`,{
        name,
        type
    },{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // RETURN A PROMISE
    return response.data
}
// ! ========================DELETE=================================
export const deleteCategoryAPI = async (id) => {
    const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //Return a promise
    return response.data;
  };
  //! =======================LIST=================================== 
export const listCategoryAPI = async()=>{
    const response = await axios.get(`${BASE_URL}/categories/lists`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // RETURN A PROMISE
    return response.data
}