import {API_URL} from "../configs/env"
import axios from "axios"

export const getAllData = async() => {
  const response = await axios.get(`${API_URL}/books`)
  return response.data
}


export const getDetailData = async(id) => {
  const response = await axios.get(`${API_URL}/books/${id}`)
  return response.data
}
