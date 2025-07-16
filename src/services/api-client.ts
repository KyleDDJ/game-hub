import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd8f4521e9e314be9be4da242b9c46202'
    }
})