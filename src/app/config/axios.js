import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:2040/api/v1/',
    baseURL: 'https://api.betzon.com/api/v1/',
    timeout: 50000, 
    headers: {
        'Content-Type': 'application/json',
        platform: 'web',
        'x-api-key': 'mb52ea2d-4567-4956-9d19-35a7e75a2c17',
    },
});

api.interceptors.response.use(function (response) {
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


export default api  