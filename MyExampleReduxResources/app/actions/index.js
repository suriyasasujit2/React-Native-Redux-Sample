import * as types from '../constants/actionTypes'

export const login = ({...loginModel}) => ({ type: types.LOGIN, ...loginModel  })
export const register = ({...registerModel}) => ({ type: types.REGISTER, ...registerModel})
export const getAllUsers = () => ({ type: types.ALL_USERS})
