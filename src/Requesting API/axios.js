import axios from 'axios';

const link = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

export default link;