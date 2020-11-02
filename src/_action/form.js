import axios from 'axios'
import { CONTACT_US } from './type'

export const emailContactForm = data => dispatch => {
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
    
    const body = JSON.stringify(data)
    
   axios.post(`${process.env.REACT_APP_API}/contact`, body, config)
    .then(res => dispatch({
      type: CONTACT_US,
      payload: res.data
    }))
    .catch(err => console.log(err));
};
