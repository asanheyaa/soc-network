import { NavLink } from 'react-router-dom'
import asideStyles from './Aside.module.css'
import FriendsItem from './FriendsItem/FriendsItem'


function setActive({ isActive }) {
	return { color: isActive ? 'gold' : 'white' }
}

function Aside(p) {
	
	const friendsItem = p.friends.map(f => <FriendsItem key={f.id} name={f.name} color={f.color} />)

	return (
		<aside className={asideStyles.aside}>
			<nav className={asideStyles.nav}>
				<ul className={asideStyles.list}>
					<li className={asideStyles.item}>
						<NavLink style={setActive} className={asideStyles.link} to="profile">Profile</NavLink>
					</li>
					<li className={asideStyles.item}>
						<NavLink style={setActive} className={asideStyles.link} to="dialogs">Messages</NavLink>
					</li>
					<li className={asideStyles.item}>
						<NavLink style={setActive} className={asideStyles.link} to="news">News</NavLink>
					</li>
					<li className={asideStyles.item}>
						<NavLink style={setActive} className={asideStyles.link} to="music">Music</NavLink>
					</li>
					<li className={asideStyles.item}>
						<NavLink style={setActive} className={asideStyles.link} to="settings">Settings</NavLink>
					</li>
					<li className={asideStyles.item}>
						<NavLink style={setActive} className={asideStyles.link} to="users">Users</NavLink>
					</li>
				</ul>
			</nav>
			<div className={asideStyles.friends}>
				<h4 className={asideStyles.friendsTitle}>Friends</h4>
				<div className={asideStyles.firendsItems}>
					{friendsItem}
				</div>
				
			</div>
		</aside>
	)
}

export default Aside