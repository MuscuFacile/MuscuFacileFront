import Constants from '@/config.js'

import axios from 'axios'

export const getAllEquipements = () => {
  const url = `${Constants.API_LOCALHOST}/equipments`

  return axios.get(url)
}
