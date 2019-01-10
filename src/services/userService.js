import Constants from '@/config.js'

import axios from 'axios'

export const getUser = email => {
  const url = `${Constants.API_LOCALHOST}/user/details/${email}`

  return axios.get(url)
}

export const insertUser = (email, password) => {
  const url = `${Constants.API_LOCALHOST}/user/insert`

  const params = {
    email: email,
    pass: password
  }

  return axios.post(url, params)
}

export const logUser = (email, password) => {
  const url = `${Constants.API_LOCALHOST}/user/login`

  const params = {
    email: email,
    pass: password
  }

  return axios.post(url, params)
}

export const updateUser = (email, data) => {
  const url = `${Constants.API_LOCALHOST}/user/details/${email}`

  console.log(data)
  return axios.patch(url, data)
}
