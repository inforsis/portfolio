import axios from 'axios'
let development = process.env.NODE_ENV !== 'production'
const api = axios.create({
    baseURL: development ? 'http://localhost/jadson.dev/portfolio/wordpress/wp-json/wp/v2/' : 'https://jadson.dev/wordpress/wp-json/wp/v2/',
    timeout: 30000
})
export default api