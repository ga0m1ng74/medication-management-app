import axios from "axios"
//@ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/**
 * token write and read
 */
export const setToken = (token: string) => sessionStorage.setItem('token', token)
export const getToken = () => sessionStorage.getItem('token')
/**
 * server url
 */
export const serverUrl = 'http://localhost:3006'

const instance = axios.create({
    baseURL: serverUrl,
    timeout: 5000,
    //allow server push cookies
    withCredentials: true,
})

// 全局拦截器 before request 
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.token = getToken()
    NProgress.start()
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    NProgress.done()
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    NProgress.done()
    return Promise.reject(error);
});


/**
 * get request
 * @param url 
 * @param params 
 * @returns 
 */
export const get = (url: string, params: any = {}) => instance.get(url, { params }).then(res => res.data)
/**
 * post request
 * @param url 
 * @param data 
 * @returns 
 */
export const post = (url: string, data: any = {}) => instance.post(url, data).then(res => res.data)

/**
 * put request
 * @param url 
 * @param data 
 * @returns 
 */
export const put = (url: string, data: any = {}) => instance.put(url, data).then(res => res.data)

/**
 * patch request
 * @param url 
 * @param data 
 * @returns 
 */
export const patch = (url: string, data: any = {}) => instance.patch(url, data).then(res => res.data)
/**
 * delete request
 * @param url 
 * @returns 
 */
export const del = (url: string) => instance.delete(url).then(res => res.data)