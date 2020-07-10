import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactjsjclg.firebaseio.com/'
})

export default instance;