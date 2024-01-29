
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"


let store = {
	_state: {
		messagesPage: {
			usersData: [
				{ id: 1, name: 'Danielle' },
				{ id: 2, name: 'Ivan' },
				{ id: 3, name: 'Mosia' },
			],
			messages: [
				{ id: 1, messageIn: 'I miss and i kiss you and  love u!', messageOut: 'I miss you too, hug u!', },
				{ id: 2, messageIn: 'my beathy boy *kiss*!', messageOut: 'I need you and a thank you and i love u, beathy!', },
				{ id: 3, messageIn: 'mur myauuuu miaaayyy! ***', messageOut: 'mur mur mur! ***', },
			],
			inputMessageText: ''
		},
		profilePage: {
			posts: [
				{ id: 1, likes: 50, text: 'Danusia kiss me' },
				{ id: 2, likes: 5, text: '***********' },
				{ id: 3, likes: 30, text: ' in love' },
				{ id: 4, likes: 20, text: 'bored((' },
				{ id: 5, likes: 10, text: 'Danusia my big love' }
			],
			inputPostText: '',

		},
		aside: {
			friends: [
				{ id: 1, name: 'Danielle', color: "#FFF" },
				{ id: 2, name: 'Ivan', color: "#036987" },
				{ id: 3, name: 'Mosia', color: "#000" }
			]
		},
	},
	_callSubscriber() {
	},
	subscriber(observer) {
		this._callSubscriber = observer
	},
	getState() {
		return this._state
	},
	dispatch(action) { 
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
		this._callSubscriber(this.getState())
	},
}





export default store;