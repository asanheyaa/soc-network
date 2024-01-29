import { connect } from 'react-redux';
import { actionAddPost, actionInputPost } from '../../../../redux/profile-reducer'
import MyPosts from './MyPosts'

// function MyPostsContainer(p) {

// 	return (
// 		<StoreContext.Consumer>
// 			{ (store) => {
// 				let state = store.getState().profilePage;

// 				let addNewPost = () => {
// 					store.dispatch(actionAddPost())
// 				}


// 				let inputPotsArea = (text) => {
// 					let action = actionInputPost(text)
// 					store.dispatch(action)
// 				}
// 				return (
// 					<MyPosts addPost={addNewPost} inputPostArea={inputPotsArea} posts={state.posts} inputPotsText={state.inputPostText} />
// 				)
// 			}
// 		}
// 		</StoreContext.Consumer>
// 	)
// }

const mapStateToProps = (state) => ({
	posts: state.profilePage.posts,
	inputPotsText: state.profilePage.inputPostText
})

const mapDispathToProps = (dispatch) => ({
	addPost: (textPost) => {
		dispatch(actionAddPost(textPost))
	},
	inputPostArea: (text) => {
		dispatch(actionInputPost(text))
	}
})

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts)



export default MyPostsContainer