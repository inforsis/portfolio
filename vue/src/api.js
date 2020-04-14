import axios from 'axios'
import Vue from 'vue'
import NProgress from 'vue-nprogress'

Vue.use(NProgress)

const nprogress = new NProgress({ parent: 'body' })

let development = process.env.NODE_ENV !== 'production'
const api = axios.create({
    baseURL: development ? 'http://localhost/jadson.dev/portfolio/wordpress/wp-json/wp/v2/' : 'https://jadson.dev/wordpress/wp-json/wp/v2/',
    timeout: 30000
})

// before a request is made start the nprogress
api.interceptors.request.use(config => {
    if (document.getElementById('funFactsCard')) {
        nprogress.start()
        document.getElementById('checkFunFacts').click()
    }
    return config
})

// before a response is returned stop nprogress
api.interceptors.response.use(response => {
    nprogress.done()
    if (document.getElementById('funFactsCard')) {
        document.getElementById('checkFunFacts').checked = false
    }
    return response
})

export default api