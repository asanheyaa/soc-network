import { Field, reduxForm } from "redux-form"
import { haveSymbols, maxLength } from "../../../../utils/validators/validators"
import { Textarea } from "../../../commons/FormsControls"



function MyPostsForm(props) {
	const { handleSubmit } = props,
		maxLengthInput = maxLength(10)
	
	return (
		
		<form action="" onSubmit={handleSubmit}>
			<Field placeholder="Post message" name="newPostText" validate={[haveSymbols, maxLengthInput]} component={Textarea} />
			<button>Post</button>
		</form>
	)
}


 const MyPostsReduxForm = reduxForm({
	// a unique name for the form
	form: 'postsForm'
})(MyPostsForm)

export default MyPostsReduxForm

// export default function MyPostsFormContainer(props) {
// 	const onSubmit = (values) => {
// 		// print the form values to the console
// 		props.onAddNewPost(values.newPostText)
// 		console.log(values)
// 	}
// 	return (
// 		<MyPostsReduxForm onSubmit={onSubmit} />
		
// 	)
// }