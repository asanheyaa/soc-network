import { usersAPI } from "../axios-creators"

const UNFOLLOW = 'users/UNFOLLOW',
	FOLLOW = 'users/FOLLOW',
	SET_USERS = 'users/SET_USERS',
	SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
	SET_TOTAL_ITEMS = 'users/SET_TOTAL_ITEMS',
	SET_FATCHING = 'users/SET_FATCHING',
	DISABLE_BUTTON = 'users/DISABLE_BUTTON'

export const unfollow = (userID) => ({
	type: UNFOLLOW,
	userID
})

export const follow = (userID) => ({
	type: FOLLOW,
	userID
})
export const setUsers = (usersInfo) => ({
	type: SET_USERS,
	usersInfo
})
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage
})
export const setTotalItems = (totalItems) => ({
	type: SET_TOTAL_ITEMS,
	totalItems

})
export const setFatching = (isFatching) => ({
	type: SET_FATCHING,
	isFatching

})
export const disableButton = (isFatching, userID) => ({
	type: DISABLE_BUTTON,
	isFatching,
	userID

})

export const getUsersThunkCreator = (currentPage, maxTotalCount, page) => {
	return async (dispatch) => {
		dispatch(setFatching(true))
		let response = await usersAPI.getUsers(currentPage, maxTotalCount)
		dispatch(setUsers(response.items))
		dispatch(setTotalItems(response.totalCount))
		dispatch(setFatching(false))
		if (page) {
			dispatch(setCurrentPage(page))
		}
	}
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
	dispatch(disableButton(true, id))
	let response = await apiMethod (id)
	if (response.resultCode === 0) {
		dispatch(actionCreator(id))
		dispatch(disableButton(false, id))
	}
}

export const unfollowThunkCreator = (id) => {
	return async (dispatch) => {
		let apiMethod = usersAPI.unfollowUser.bind(usersAPI)
		let actionCreator = unfollow

		followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
	}

}
export const followThunkCreator = (id) => {
	return async (dispatch) => {
		let apiMethod = usersAPI.followUser.bind(usersAPI)
		let actionCreator = follow

		followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
	}
}




let initialState = {
	usersInfo: [
		// { id: 1, avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfmf6BcNiHcM8zUYl-ok7sUjB_DR99kFQSxmkn9kXT60dQIRfmrQ6kIIMYG1EFUeGgTk&usqp=CAU', name: 'Danielle', info: 'I am a lovely wife', location: { city: 'Kyiv', country: 'Ukraine' }, followed: true },
		// { id: 2, avatarURL: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403', name: 'Ivan', info: 'I am a lovely husbant', location: { city: 'Chernivtsi', country: 'Ukraine' }, followed: false },
		// { id: 3, avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_u6nfl_13dhtaUOVQQKMl4b61ENltsr0l_ioZNet_rS8ITCsnjkO-CHyi3jGxNTwySQ&usqp=CAU', name: 'Mosia', info: 'I am a Boss', location: { city: 'Kiyv', country: 'Ukraine' }, followed: false },
		// { id: 4, avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mVFL-_UbCPqV6Y1FU9vhDXZa5rzdAGL3Vx02SaQoXE7nNnVGOBif8-22sS2dKoSyNts&usqp=CAU', name: 'Bro', info: 'I am a Boss', location: { city: 'Lviv', country: 'Ukraine' }, followed: false },
	],
	currentPage: 1,
	maxTotalCount: 10,
	totalItems: 15,
	isFatching: false,
	usersInFollowing: [],
	fake: 10
}


const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FAKE': return { ...state, fake: state.fake + 1 };
		case UNFOLLOW:
			return {
				...state,
				usersInfo: state.usersInfo.map(u => {
					if (u.id === action.userID) {
						return {
							...u,
							followed: false
						}
					} else {
						return u;
					}
				}),
			}
		case FOLLOW:
			return {
				...state,
				usersInfo: state.usersInfo.map(u => {
					if (u.id === action.userID) {
						return { ...u, followed: true }
					} else {
						return u
					}
				})
			}
		case SET_USERS:
			return {
				...state,
				usersInfo: [...action.usersInfo]
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}

		case SET_TOTAL_ITEMS:
			return {
				...state,
				totalItems: action.totalItems
			}
		case SET_FATCHING:
			return {
				...state,
				isFatching: action.isFatching
			}
		case DISABLE_BUTTON:
			return {
				...state,
				usersInFollowing: action.isFatching ?
					[...state.usersInFollowing, action.userID] :
					[...state.usersInFollowing.filter(id => id !== action.userID)]
			}
		default:
			return state
	}


}
export default usersReducer;