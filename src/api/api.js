import axios from 'axios'

const API_URL = 'https://66648245932baf9032ab4b5e.mockapi.io/'

export const getData = async (endPoints) => {
  try {
    const response = await axios.get(`${API_URL}${endPoints}`)
    return response.data
  } catch {
    throw new Error('Error fetching users')
  }
}

export const updateUserVoted = async (endPoints, userId, vote) => {
  try {
    const response = await axios.put(`${API_URL}${endPoints}/${userId}`, {
      voted: vote,
    })
    // return response.data
  } catch {
    throw new Error('Error fetching users')
  }
}
//
