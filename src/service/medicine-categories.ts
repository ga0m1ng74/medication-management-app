import { get, post, patch, del } from '../utils/Request'

/**
 * get medicine data list
 * @param query 
 * @returns 
 */
export const loadDataAPI = (query: any = {}) => get('/admin/medicine_categories',query)

/**
 * get medicine data by id
 * @param id 
 * @returns 
 */
export const loadDataByIdAPI = (id: string) => get('/admin/medicine_categories' + id)

/**
 * add a new medicine data
 * @param data 
 * @returns 
 */
export const InsertAPI = (data: any) => post('/admin/medicine_categories', data)

/**
 * update a medicine data by id
 * @param id 
 * @param data 
 * @returns 
 */
export const updateByIdAPI = (id: string, data: any) => patch('/admin/medicine_categories' + id, data)

/**
 * delete a medicine data by id
 * @param id 
 * @returns 
 */
export const deleteByIdAPI = (id: string) => del('/admin/medicine_categories' + id)

/**
 * delete medicines data by ids, ids use ',' to separate
 * @param ids 
 * @returns 
 */
export const deletaManyByIdsAPI = (ids: string) => del('/admin/medicine_categories/remove_many?ids=' + ids)