import { post } from '../utils/Request'

type loginData ={
    userName:string,
    password:string,
}

/**
 * login api
 * @param data 
 * @returns 
 */
export const loginAPI = (data:loginData) => post('auth/admin_login',data)