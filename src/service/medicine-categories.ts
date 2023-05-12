import { get, post, patch, del } from '../utils/Request'

/**
 * get medicine data list
 * @param query 
 * @returns 
 */
export const loadDataAPI = (query: any = {}) => get('admin/medicines/' + query)

/**
 * get medicine data by id
 * @param id 
 * @returns 
 */
export const loadDataByIdAPI = (id: string) => get('admin/medicines/' + id)

/**
 * add a new medicine data
 * @param data 
 * @returns 
 */
export const InsertAPI = (data: any) => post('admin/medicines/' + data)

/**
 * update a medicine data by id
 * @param id 
 * @param data 
 * @returns 
 */
export const updateByIdAPI = (id: string, data: any) => patch('admin/medicines/' + id, data)

/**
 * delete a medicine data by id
 * @param id 
 * @returns 
 */
export const deleteByIdAPI = (id: string) => del('admin/medicines/' + id)

/**
 * delete medicines data by ids, ids use ',' to separate
 * @param ids 
 * @returns 
 */
export const deletaManyByIdsAPI = (ids: string) => del('admin/medicines/remove_many?ids=' + ids)