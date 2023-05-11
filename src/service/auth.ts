import { post } from '../utils/Request'

type loginData ={
    username:string,
    password:string,
}

export const loginAPI = (data:loginData) => post('',data)