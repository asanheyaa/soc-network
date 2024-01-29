import { connect } from "react-redux";
import { setCurrentPage, disableButton, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator } from "../../../redux/users-reducer";
import Users from "./users";
import React from "react";
import { compose } from "redux";
import withAuthRedirect from "../../../hocs/authRedirect";
import { getCurrentPageSelector, getIsFatchingSelector, getMaxTotalCountSelector, getTotalItemsSelector, getUsersInFollowingSelector, getUsersInfoReSelector, getUsersInfoSelector } from "../../../utils/selectors/selectors";

class UsersContainer extends React.Component {

	componentDidMount = () => {
		// this.props.setFatching(true)
		// getUsers(this.props.currentPage, this.props.maxTotalCount).then(data => {
		// 	this.props.setUsers(data.items)
		// 	this.props.setTotalItems(data.totalCount)
		// 	this.props.setFatching(false)
		// })
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.maxTotalCount)
	}

	changePage = (page) => {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.maxTotalCount, page)
	}

	// pages = () => {
	// 	let pagesCount = this.props.totalItems / this.props.maxTotalCount;
	// 	let pages = []
	// 	for (let index = 1; index <= 10; index++) {
	// 		pages.push(index)
	// 	}

	// 	return pages
	// }


	render = () => {
		return (
			<Users state={this.props.state}
				currentPage={this.props.currentPage}
				changePage={this.changePage}
				// pages={this.pages()}
				isFatching={this.props.isFatching}
				usersInFollowing={this.props.usersInFollowing}
				unfollow={this.props.unfollowThunkCreator}
				follow={this.props.followThunkCreator}
				disableButton={this.props.disableButton}
				totalItems={this.props.totalItems}
				maxTotalCount={this.props.maxTotalCount}
			/>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		state: getUsersInfoReSelector(state),
		currentPage: getCurrentPageSelector(state),
		maxTotalCount: getMaxTotalCountSelector(state),
		totalItems: getTotalItemsSelector(state),
		isFatching: getIsFatchingSelector(state),
		usersInFollowing: getUsersInFollowingSelector(state)
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		unfollow: (userID) => {
// 			dispatch(unfollow(userID))
// 		},
// 		follow: (userID) => {
// 			dispatch(follow(userID))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsers(users))
// 		},
// 		setCurrentPage: (currentPage) => {
// 			dispatch(setCurrentPage(currentPage))
// 		},
// 		setTotalItems: (totalItems) => {
// 			dispatch(setTotalItems(totalItems))
// 		},
// 		setFatching: (isFatching) => {
// 			dispatch(setFatching(isFatching))
// 		}
// 	}
// }



let dispatches = {
	setCurrentPage,
	disableButton,
	getUsersThunkCreator,
	unfollowThunkCreator,
	followThunkCreator
}

export default compose(
	connect(mapStateToProps, dispatches),
	withAuthRedirect,
)(UsersContainer)
// export default connect(mapStateToProps, dispatches)(UsersContainer)

