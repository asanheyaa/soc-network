const SEND_MESSAGE = 'dialogs/SEND_MESSAGE',
	INPUT_MESSAGE = 'dialogs/INPUT_MESSAGE';

export const actionSendMessage = () => ({ type: SEND_MESSAGE })

export const actionInputMessage = (text) => ({
	type: INPUT_MESSAGE,
	newText: text
})

let initialState = {
	usersData: [
		{ id: 1, name: 'Daniel' },
		{ id: 2, name: 'Ivan' },
		{ id: 3, name: 'John' },
	],
	messages: [
		{ id: 1, messageIn: 'Hi, how are u?', messageOut: 'Fine', },
		{ id: 2, messageIn: 'Hi', messageOut: 'Hi', },
		{ id: 3, messageIn: 'good morning', messageOut: 'Thanks', },
	],
	inputMessageText: ''
}

function log(copyState) {
	console.log(copyState);
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let newItem = {
				id: 1,
				messageIn: state.inputMessageText,

			}
			return {
				...state,
				messages: [...state.messages, newItem],
				inputMessageText: ''
			};
			// let copyState = { ...state };
			// copyState.messages = [ ...state.messages] 
			// copyState.messages.push(newItem)
			// copyState.inputMessageText = ''
		}
		case INPUT_MESSAGE: {
			return {
				...state,
				inputMessageText: action.newText
};
			// let copyState = { ...state }
			// copyState.inputMessageText = action.newText
		}

		default:
			return state;
	}
}

export default dialogsReducer