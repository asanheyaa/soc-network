import MyPostsStyles from './MyPosts.module.css'
import MyPostsReduxForm from './MyPostsForm'
import MyPostsFormContainer from './MyPostsForm'
import Post from './Post/Post'


function MyPosts(p) {
	let onAddNewPost = (textPost) => {
		p.addPost(textPost)
	}


	let onInputPotsArea = (e) => {
		let text = e.target.value
		p.inputPostArea(text)
	}

	const onSubmit = (values) => {
			// print the form values to the console
		p.addPost(values.newPostText)
			console.log(values)
		}

	const postsElements = p.posts.map(p => <Post key={p.id} likes={p.likes} text={p.text} />)
	return (
		<div className={MyPostsStyles.myPosts}>
			posts
			<MyPostsReduxForm onSubmit={onSubmit}  />
			{/* <div className={MyPostsStyles.newPost}>
				<textarea onChange={onInputPotsArea} value={p.inputPotsText}></textarea>
				<button onClick={onAddNewPost}>add post</button>
			</div> */}
			<div className={MyPostsStyles.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts