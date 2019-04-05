import axios from 'axios'

const instance = axios.create({
  //  baseURL: 'https://react-calculator-a670a.firebaseio.com/'
    baseURL: 'https://react-calculator-a670a.firebaseio.com/'

})

export default instance