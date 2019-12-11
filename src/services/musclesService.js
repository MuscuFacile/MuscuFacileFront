import Constants from '@/config.js'

import axios from 'axios'

export const getAllMuscles = () => {
  const url = `${Constants.API_LOCALHOST}/muscles`

  return axios.get(url)
}
