import Constants from '@/config.js'

import axios from 'axios'

export const getAllCategories = () => {
  const url = `${Constants.API_LOCALHOST}/categories`

  return axios.get(url)
}

export const getCategory = id => {
  const url = `${Constants.API_LOCALHOST}/categories/${id}`

  return axios.get(url)
}
