
import { isAuthThunkCreator } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {
	initialized: false,

}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}


		default:
			return state;
	}
}

export const initializedApp = () => {
	return (dispatch) => {
		let promise = dispatch(isAuthThunkCreator())
		Promise.all([promise]).then(() => {
			dispatch(setInitializedSuccess())
		})
	}
}


export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export default appReducer