import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '8141d26b1fa74bbe9935c14fc9c29f34'
    }
})

export default apiClient;