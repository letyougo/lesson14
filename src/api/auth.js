import { request } from '../config'

export const getUserList = params => request.get('/user', { params })
