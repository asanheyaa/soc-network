import { stopSubmit } from "redux-form";
import { authAPI, } from "../axios-creators";

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isLogined: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:

			return {
				...state,
				...action.data,
				// isLogined: true,
			}


		default:
			return state;
	}
}

export const isAuthThunkCreator = () => {

	return async (dispatch) => {

		let response = await authAPI.isAuth()

		if (response.resultCode === 0) {
			let { id, login, email } = response.data
			dispatch(setUserData(id, login, email, true))
		}
	}
}

export const authLoginThunkCreator = (email, password, rememberMe) => {
	return async (dispatch) => {
		let response = await authAPI.authLogin(email, password, rememberMe)
		if (response.resultCode === 0) {
			dispatch(isAuthThunkCreator())
		} else {
			// debugger
			let message = response.messages.length > 0 ? response.messages[0] : 'some error'
			dispatch(stopSubmit('login', { _error: message }))
		}
	}
}

export const authOutThunkCreator = () => {
	return async (dispatch) => {

		let response = await authAPI.authOut()
		if (response.resultCode === 0) {
			dispatch(setUserData(null, null, null, false))
		}

	}
}

export const setUserData = (userId, login, email, isLogined) => ({ type: SET_USER_DATA, data: { userId, login, email, isLogined } })

export default authReducer