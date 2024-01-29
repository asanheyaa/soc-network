import { profileAPI } from "../axios-creators";

const ADD_POST = 'profile/ADD_POST',
	INPUT_POST_AREA = 'profile/INPUT_POST_AREA',
	SET_PROFILE = 'profile/SET_PROFILE',
	SET_STATUS = 'profile/SET_STATUS',
	UPDATE_STATUS = 'profile/UPDATE_STATUS';

export const actionAddPost = (postText) => {
	return {
		type: ADD_POST,
		postText
	}

}

export const actionInputPost = (text) => ({
	type: INPUT_POST_AREA,
	newText: text
})

const setProfile = (profile) => ({
	type: SET_PROFILE,
	profile
})


const updateStatus = (status) => ({
	type: UPDATE_STATUS,
	status
})
export const findUserThunkCreator = (userId) => {
	return async (dispatch) => {
		let response = await profileAPI.findUser(userId)
		dispatch(setProfile(response))
	}
}
export const setStatusThunkCreator = (userId) => {
	return async (dispatch) => {
		let response = await profileAPI.setStatus(userId)
		dispatch(updateStatus(response))
	}
}
export const updateStatusThunkCreator = (status) => {
	return async (dispatch) => {
		let response = await profileAPI.updateStatus(status)
		dispatch(updateStatus(status))
	}
}



let initialState = {
	posts: [
		{ id: 1, likes: 50, text: 'Hello World' },
		{ id: 2, likes: 5, text: 'Stay home' },
		{ id: 3, likes: 30, text: 'Good Morning' },
		{ id: 4, likes: 20, text: 'Bored' },
		{ id: 5, likes: 10, text: 'First Post' }
	],
	inputPostText: '',
	profile: null,
	status: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newItem = {
				id: 6,
				likes: 0,
				text: action.postText
			}
			return {
				...state,
				posts: [...state.posts, newItem],
				inputPostText: ''
			}
			// let stateCopy = { ...state }
			// stateCopy.posts = [...state.posts]
			// stateCopy.posts.push(newItem)
			// stateCopy.inputPostText = '';
		}

		case INPUT_POST_AREA: {
			return {
				...state,
				inputPostText: action.newText
			}
			// let stateCopy = { ...state }
			// stateCopy.inputPostText = action.newText
		}

		case SET_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case UPDATE_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state
	}


}

export default profileReducer;