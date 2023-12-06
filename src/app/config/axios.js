import axios from 'axios'

axios.interceptors.request.use(
    config => {

        //config.baseURL = 'https://13.52.120.52'
        config.baseURL = 'https://api.campuscupids.com'
        //config.baseURL = 'http://localhost:3001'
        return config
    },
    error => {
        Promise.reject(error)
    }
)

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response
}, function (error) {
    // Do something with response error
    /*
      if (error.response.status === 403) {
        localStorage.clear()
        window.location.pathname = '/';
      }
    */
    return Promise.reject(error)
})


export default axios  