import Constants from '@/config.js'

import axios from 'axios'

export const getUser = email => {
  const url = Constants.API_LOCALHOST + '/user/details/' + email

  return axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })        
}
