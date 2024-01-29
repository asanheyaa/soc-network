import axios from "axios";

let instanse = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'd7194500-904c-49e7-a0d4-25934dad69e6'
	}
})





export const isAuth = () => {
	console.warn('Please change Axios "isAuth" to object "authAPI.isAuth" ');
	return authAPI.isAuth()
}



export const authAPI = {
	isAuth: async () => {
		let response = await instanse.get(`auth/me`)
		return response.data
	},
	authLogin: async (email, password, rememberMe = false) => {
		let response = await instanse.post(`/auth/login`, { email, password, rememberMe })
		return response.data
	},
	authOut: async () => {
		let response = await instanse.delete(`/auth/login`)
		return response.data
	}
}

export const usersAPI = {
	getUsers: async (currentPage, maxTotalCount) => {
		let response = await instanse.get(`users?page=${currentPage}&count=${maxTotalCount}`)
		return response.data

	},
	followUser: async (id) => {
		let response = await instanse.post(`follow/${id}`)
		return response.data
	},
	unfollowUser: async (id) => {
		let response = await instanse.delete(`follow/${id}`)
		return response.data
	}
}
export const profileAPI = {
	findUser: async (userId) => {
		let response = await instanse.get(`profile/${userId}`)
		return response.data
	},
	setStatus: async (userId) => {
		let response = await instanse.get(`/profile/status/${userId}`)
		return response.data
	},
	updateStatus: async (status) => {
		let response = await instanse.put(`/profile/status`, { status })
		return response.data
	}
}

