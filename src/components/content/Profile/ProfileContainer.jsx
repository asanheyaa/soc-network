import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { findUserThunkCreator, setStatusThunkCreator, updateStatusThunkCreator } from "./../../../redux/profile-reducer.js";
import withAuthRedirect from "../../../hocs/authRedirect.js";
import { compose } from "redux";
import WithRouter from "../../../hocs/withRouter.js";



class ProfileContainer extends React.Component {


	componentDidMount = () => {
		let userId = this.props.router.params.userId
		if (userId) {
			this.props.findUserThunkCreator(userId)
			this.props.setStatusThunkCreator(userId)
		} else {
			userId = this.props.loginedId
			// 30241
			this.props.findUserThunkCreator(userId)
			this.props.setStatusThunkCreator(userId)
		}
	}



	render = () => {
		return <Profile {...this.props} profile={this.props.profile} />
	}

}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	loginedId: state.auth.userId
	// isAuth: state.auth.isLogined
})

let dispatches = {
	// setProfile,
	findUserThunkCreator,
	setStatusThunkCreator,
	updateStatusThunkCreator
}


export default compose(
	connect(mapStateToProps, dispatches),
	WithRouter,
	withAuthRedirect,
)(ProfileContainer)

// let authRedirect = withAuthRedirect(ProfileContainer)

// export default connect(mapStateToProps, dispatches)(withRouter(authRedirect))

