import axios from 'axios'

export const verifyNumber = async (value, token) => {

  // set Header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  // if token, add to header
  if(token) {
    config.headers['x-auth-token'] = token;
  }

  return await axios.post(`${process.env.REACT_APP_API}/verifyNumber`, value, config)
    .then(res => res.data)
}

