import s from './FriendsItem.module.css'



function FriendsItem(p) {
	return (
		<div className={s.friendsItem}>
			<div style={{background:`${p.color}`}} className={s.friendsAvatar}></div>
			<div className={s.friendsName}>{p.name}</div>
		</div>
	)
}

export default FriendsItem