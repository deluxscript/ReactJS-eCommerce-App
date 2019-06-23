import axios from 'axios';

const instance = axios.create({
    baseURL:    'https://delux-ecommerce.firebaseio.com/'
});

export default instance;