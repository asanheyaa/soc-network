import { connect } from 'react-redux'
import { actionInputMessage, actionSendMessage } from '../../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import withAuthRedirect from '../../../hocs/authRedirect'
import { compose } from 'redux'


// function DialogsContainer(p) {
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 			(store) => {
// 				let state = store.getState().dialogsPage;

// 				function sendMessage() {
// 					store.dispatch(actionSendMessage())
// 				}

// 				function inputMessage(text) {
// 					let action = actionInputMessage(text)
// 					store.dispatch(action)
// 				}

// 				return (
// 					<Dialogs sendMessage={sendMessage} inputMessage={inputMessage} state={state} inputMessageText={state.inputMessageText} />
// 				)
// 			}
// 		}
// 		</StoreContext.Consumer>
// 	)
// }

const mapStateToProps = (state) => ({
	inputMessageText: state.dialogsPage.inputMessageText,
	state: state.dialogsPage,
})

const mapDispatchToProps = (dispatch) => ({
	sendMessage: () => {
		dispatch(actionSendMessage())
	},
	inputMessage: (text) => {
		dispatch(actionInputMessage(text))
	}
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
)(Dialogs)

// let authRedirect = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirect);


// export default DialogsContainer

