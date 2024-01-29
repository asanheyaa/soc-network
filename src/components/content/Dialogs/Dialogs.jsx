import { Route, Routes } from 'react-router-dom'
import stylesDialogs from './Dialogs.module.css'
import Message from './Message/Message'
import ProfileInfo from './ProfileInfo/userInfo'
import FormMessagesReduxForm from './FormMessages'




function Dialogs(p) {

	function onSendMessage() {
		p.sendMessage()
		
	}
	
	function onInputMessage(e) {
		let text = e.target.value
		p.inputMessage(text)
	}

	
	const usersData = p.state.usersData.map(d => <ProfileInfo key={d.id} name={d.name} path={`${d.id}`} />)

	const onSubmit = (values) => {
		// print the form values to the console
		console.log(values)
	}

	const messages = p.state.messages.map(m =>
		<Route key={m.id} path={`${m.id}`} element={<Message messageIn={m.messageIn} />  }/>)
	return (
		<div className={stylesDialogs.dialogs}>
			<div className={stylesDialogs.users}>
				
				{usersData}
			</div>
			<div className={stylesDialogs.messages}>
				<Routes>
					{messages}
				</Routes>
				<FormMessagesReduxForm onSubmit={onSubmit}/>
				{/* <textarea onChange={onInputMessage} value={p.inputMessageText}  className={stylesDialogs.textarea}></textarea>
				<button className={stylesDialogs.buttonAddMessage} onClick={onSendMessage} type='button'>Send</button> */}
			</div>
		</div>
	)
}


export default Dialogs

