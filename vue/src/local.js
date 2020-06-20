import axios from 'axios'
import Vue from 'vue'
import NProgress from 'vue-nprogress'

Vue.use(NProgress)

const nprogress = new NProgress({ parent: 'body' })

let development = process.env.NODE_ENV !== 'production'
const local = axios.create({
    baseURL: development ? 'json/' : 'json/',
    timeout: 30000
})

// before a request is made start the nprogress
local.interceptors.request.use(config => {
    nprogress.start()
    //document.getElementById('checkFunFacts').click()
    return config
})

// before a response is returned stop nprogress
local.interceptors.response.use(response => {
    //document.getElementById('checkFunFacts').checked = false
    nprogress.done()
    return response
})

export default local