import { Field, reduxForm } from "redux-form"
import { authLoginThunkCreator } from "../../redux/auth-reducer"
import { Input } from "../commons/FormsControls"
import { haveSymbols } from "../../utils/validators/validators"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

function LoginPageForm({ handleSubmit , error}) {
	return (
		<form action="" onSubmit={handleSubmit}>
			<div>
				<Field placeholder={"email"} name="email" validate={[haveSymbols]} component={Input} />
			</div>
			<div>
				<Field placeholder={"password"} name="password" validate={[haveSymbols]} component={Input} />
			</div>
			<div>
				<Field component={Input} name="rememberMe" type={'checkbox'} /> Remember me
			</div>
			<button type="submit">Login</button>
			{error && <div>
				{error}
			</div>}
		</form>
	)
}


const LoginPageReduxForm = reduxForm({
	// a unique name for the form
	form: 'login'
})(LoginPageForm)



function LoginPage(p) {
	const onSubmit = (values) => {
		// print the form values to the console
		console.log(values)
		p.authLoginThunkCreator(values.email, values.password, values.rememberMe)

	}

	if (p.isLogined) {
		return (
			<Navigate to={"/profile"} />
		)
	}
	return (
		<div>
			<h1 href="">Login</h1>
			<LoginPageReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	isLogined: state.auth.isLogined,
})

export default connect(mapStateToProps, { authLoginThunkCreator })(LoginPage)

