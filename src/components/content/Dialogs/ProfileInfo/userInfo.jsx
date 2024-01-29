import s from './userInfo.module.css'
import { NavLink } from 'react-router-dom'


function setActive({ isActive }) {
	return { color: isActive ? 'gold' : 'black' }
}

function ProfileInfo(props) {
	return (
		<NavLink style={setActive} className={s.user} to={`/dialogs/${props.path}`}>
			<div className={s.avatar}></div>
			<div className={s.name}> {props.name}</div>
		</NavLink>
	)
}


export default ProfileInfo

