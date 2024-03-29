import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


function withAuthRedirect(Component) {

	class RedirectComponent extends React.Component {
		render = () => {
			if (!this.props.isAuth) { return <Navigate to='/login' /> }
			return <Component {...this.props} />
		}
	}

	const mapStateToProps = (state) => ({
		isAuth: state.auth.isLogined
	})

	let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

	return connectedRedirectComponent
}

export default withAuthRedirect