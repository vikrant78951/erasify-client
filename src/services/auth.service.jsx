import axios from "axios";

import { API } from "@constants/Constants";


export const loginUser = async (formData)=>{
    try {
      const response = await axios.post(API.login, {
        email: formData.email,
        password: formData.password,
      },{
        withCredentials: true,
      });
        if (response.status === 200) {
          return  response.data;
        }
        throw new Error('Failed to logout user')
    } catch (err) {
     throw new Error(err.response?.data?.message || err.message)
    }
}

export const logoutuser =  async () => {
  try{
    const response = await  axios.post(API.logout,{},{
      withCredentials:true
    });

    if(response.status ===200){
      return true    
    }

    throw new Error('Failed to logout user')

  }catch(error){
    return error?.response?.data?.message || error?.message
  }

}

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(API.register, formData,{
      withCredentials: true,
    });
      if (!response.status === 200) {
        throw new Error('Failed to register user')
      }
      return await response.data
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message)
  }

};

