import { Field, reduxForm } from 'redux-form'
import stylesDialogs from './Dialogs.module.css'


function FormMessages(props) {
	const { handleSubmit } = props

	return (
		<form action="" onSubmit={handleSubmit}>
			<Field className={stylesDialogs.textarea} name='messageText' component={'textarea'}/>
			<button className={stylesDialogs.buttonAddMessage} type='submit'>Send</button>
		</form>
	)
}




const FormMessagesReduxForm = reduxForm({
	// a unique name for the form
	form: 'messageText'
})(FormMessages)

export default FormMessagesReduxForm
// export default function FormMessagesContainer() {
// 	const onSubmit = (values) => {
// 		// print the form values to the console
// 		console.log(values)
// 	}
// 	return (
// 		<FormMessagesReduxForm onSubmit={onSubmit}/>
// 	)
// }