import React from "react";
import Header from "./Header";
import { connect } from "react-redux"
import { isAuthThunkCreator, authOutThunkCreator } from "./../../redux/auth-reducer"


class HeaderContainer extends React.Component {
	// componentDidMount = () => {
	// 	if (!this.props.isLogined) {
	// 		this.props.isAuthThunkCreator()
	// 	}
	// }
	render = () => {
		return <Header state={this.props.state} isLogined={this.props.isLogined} authOut={this.props.authOutThunkCreator} />
	}
}

const mapStateToProps = (state) => ({
	isLogined: state.auth.isLogined,
	state: state.auth
})


export default connect(mapStateToProps, { isAuthThunkCreator, authOutThunkCreator })(HeaderContainer)

