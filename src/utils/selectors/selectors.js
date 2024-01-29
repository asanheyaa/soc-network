import { createSelector } from "reselect"

export const getUsersInfoSelector = (state) => {
	return state.usersPage.usersInfo
}
export const getUsersInfoReSelector = createSelector([getUsersInfoSelector], (usersInfo) => {
	return usersInfo.filter(u => true)
})

export const getCurrentPageSelector = (state) => {
	return state.usersPage.currentPage
}

export const getMaxTotalCountSelector = (state) => {
	return state.usersPage.maxTotalCount
}

export const getTotalItemsSelector = (state) => {
	return state.usersPage.totalItems
}
export const getIsFatchingSelector = (state) => {
	return state.usersPage.isFatching
}
export const getUsersInFollowingSelector = (state) => {
	return state.usersPage.usersInFollowing
}