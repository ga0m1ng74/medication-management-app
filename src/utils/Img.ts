import docCartoonImg from '../assets/loginImg.png'
import docLogoImg from '../assets/doctor-standing-logo.jpeg'
import {serverUrl} from './Request'

export const loginImg = docCartoonImg
export const logoImg = docLogoImg


/**
 * image handle
 * @param img 
 * @returns 
 */
export const defaultImg = (img:string)=>{
    if(img){
        if(img.startsWith('http')) return img
        return serverUrl+img
    }else{
        return loginImg
    }
}