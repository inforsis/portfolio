import axios from 'axios'
import Vue from 'vue'
import NProgress from 'vue-nprogress'

Vue.use(NProgress)

const nprogress = new NProgress({ parent: 'body' })

let development = process.env.NODE_ENV !== 'production'
const api = axios.create({
    baseURL: development ? 'http://localhost/portfolio/wordpress/wp-json/wp/v2/' : 'https://jadson.dev/wordpress/wp-json/wp/v2/',
    timeout: 30000,
    mode: 'no-cors',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

// before a request is made start the nprogress
api.interceptors.request.use(config => {
    nprogress.start()
    //document.getElementById('checkFunFacts').click()
    return config
})

// before a response is returned stop nprogress
api.interceptors.response.use(response => {
    //document.getElementById('checkFunFacts').checked = false
    nprogress.done()
    return response
})

export default api