import axios from 'axios'

axios.interceptors.request.use(
    config => {
        config.baseURL = 'https://api.betzon.com/api/v1/'
        //config.baseURL = 'http://localhost:2040/api/v1/'
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