import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost/jadson.dev/portfolio/wordpress/wp-json/wp/v2/',
    timeout: 1000
})
export default api