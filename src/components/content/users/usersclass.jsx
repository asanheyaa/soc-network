import React from 'react';
import axios from 'axios'
import s from './Users.module.css'
import userPhoto from '../../../accets/images/user.png'


class UsersClass extends React.Component {

	componentDidMount = () => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.maxTotalCount}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalItems(response.data.totalCount)
			})
	}




	render = () => {

		let pagesCount = this.props.totalItems / this.props.maxTotalCount;
		let pages = []
		for (let index = 1; index <= 10; index++) {
			pages.push(index)

		}
		const changePage = (page) => {
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.maxTotalCount}`)
				.then(response => {
					this.props.setUsers(response.data.items)
					this.props.setTotalItems(response.data.totalCount)
				})
			this.props.setCurrentPage(page)
		}
		return (
			<div className={s.users}>
				<div className={s.paginations}>
					{
						pages.map(p => {
							return (
								<button className={`${s.paginationItem} ${this.props.currentPage === p && s.active}`}
									onClick={() => { changePage(p) }} type='button'>{p}</button>)
						})
					}
				</div>
				{
					this.props.state.map(u => {

						return (
							<div key={u.id} className={s.user}>
								<div className={s.right}>
									<div className={s.avatar}><img src={u.photos.large != null ? u.photos.large : userPhoto} alt="" /></div>
									<div className={s.button}>
										{u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => {
											this.props.follow(u.id)
										}}>Follow</button>}
									</div>
								</div>
								<div className={s.personalInfo}>
									<div className={s.name}>{u.name}</div>
									<div className={s.bottomPersonal}>
										<div className={s.info}>{u.info}</div>
										<div className={s.location}>
											<div className={s.city}>{'u.location.city'}</div>
											<div className={s.country}>{'u.location.country'}</div>
										</div>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default UsersClass;