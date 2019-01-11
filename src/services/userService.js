import Constants from '@/config.js'

import axios from 'axios'

export const getUser = email => {
  const url = `${Constants.API_LOCALHOST}/users/${email}`

  return axios.get(url)
}

export const getIMC = email => {
  const url = `${Constants.API_LOCALHOST}/users/${email}/imc`

  return axios.get(url)
}

export const getUserMasses = email => {
  const url = `${Constants.API_LOCALHOST}/users/${email}/poids`

  return axios.get(url)
}

export const insertUser = (email, password) => {
  const url = `${Constants.API_LOCALHOST}/users`

  const params = {
    email: email,
    pass: password
  }

  return axios.post(url, params)
}

export const logUser = (email, password) => {
  const url = `${Constants.API_LOCALHOST}/users/login`

  const params = {
    email: email,
    pass: password
  }

  return axios.post(url, params)
}

export const updateUser = (email, data) => {
  const url = `${Constants.API_LOCALHOST}/users/${email}`

  return axios.patch(url, data)
}
