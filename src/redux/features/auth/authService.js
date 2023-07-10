import axios from 'axios'

const API_URL = 'http://localhost:2000/auth/login'

// Register user
const registerUser = async (userData) => {
  const { data } = await axios.post(`${API_URL}/register`, userData)

  return data
}

// Login user
const loginUser = async (userData) => {
  const { data } = await axios.post(`${API_URL}/login`, userData)

  localStorage.setItem('user', JSON.stringify(data))

  return data
}

// Login user
const editUserProfile = async (userData, userId) => {
  const { data } = await axios.post(`${API_URL}/${userId}/edit`, userData)

  localStorage.setItem('user', JSON.stringify(data))

  return data
}

// LogOut user
const logOutUser = () => localStorage.removeItem('user')

const authService = {
  registerUser,
  loginUser,
  logOutUser,
  editUserProfile,
}

export default authService
