import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

// ! GET THE TOKEN
const token = getUserFromStorage()
// ! ========================ADD=================================== 
export const addTransactionAPI = async({type,category,date,description,amount})=>{
    const response = await axios.post(`${BASE_URL}/transactions/create`,{
        type,
        category,
        date,
        description,
        amount
    },{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // RETURN A PROMISE
    return response.data
}
// ! ========================UPDATE=================================
export const updateCategoryAPI = async ({type,category,date,description,amount}) => {
    const response = await axios.put(`${BASE_URL}/transactions/update/${id}`,{
        type,
        category,
        date,
        description,
        amount
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
export const listTransactionsAPI = async({category,type,startDate,endDate})=>{
    const response = await axios.get(`${BASE_URL}/transactions/lists`,{
        params: {
            category,
            endDate,
            startDate,
            type
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // RETURN A PROMISE
    return response.data
}