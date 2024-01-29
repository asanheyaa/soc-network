
let initialState = {
	friends: [
		{ id: 1, name: 'Daniel', color: "#FFF" },
		{ id: 2, name: 'Ivan', color: "#036987" },
		{ id: 3, name: 'John', color: "#000" }
	]
}

const sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer