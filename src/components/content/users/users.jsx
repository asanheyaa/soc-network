import s from './Users.module.css'
import userPhoto from '../../../accets/images/user.png'
import Prealoder from '../../commons/prealoder'
import { NavLink } from 'react-router-dom'
import Paginator from './paginator.jsx'

function Users(props) {
	return (
		<div className={s.users}>
		
			{props.isFatching ?
				<Prealoder /> :
				<div className={s.usersWrapper}>
					<div className={s.paginations}>
						<Paginator {...props} />
					</div>
					{
						props.state.map(u => {
							return (
								<div key={u.id}>
									<div className={s.user}>
										<div className={s.right}>
											<NavLink to={`/profile/${u.id}`} className={s.avatar}>
												<img src={u.photos.large != null ? u.photos.large : userPhoto} alt="" />
											</NavLink>
											<div className={s.button}>
												{u.followed ?
													<button disabled={props.usersInFollowing.some((id) => id === u.id)} onClick={() => {
													props.unfollow(u.id)
												}}>Unfollow</button> :
													<button disabled={props.usersInFollowing.some((id) => id === u.id)} onClick={() => {
														props.follow(u.id)
												}}>Follow</button>}
											</div>
										</div>
										<div className={s.personalInfo}>
											<NavLink to={`/profile/${u.id}`} className={s.name}>{u.name}</NavLink>
											<div className={s.bottomPersonal}>
												<div className={s.info}>{u.status}</div>
												<div className={s.location}>
													<div className={s.city}>{'u.location.city'}</div>
													<div className={s.country}>{'u.location.country'}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>}



		</div>
	)




}

export default Users