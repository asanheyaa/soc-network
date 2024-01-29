import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"


function Profile(p) {
	
	return (
		<div>
			<ProfileInfo status={p.status} updateStatus={p.updateStatusThunkCreator} profile={p.profile} />
			<MyPostsContainer />
		</div>
	)
}


export default Profile