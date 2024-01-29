import headerStyles from "./Header.module.css";
import { NavLink } from 'react-router-dom'

function Header(p) {
	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.container}>
				<div className={headerStyles.logo}>
				</div>
				<nav className={headerStyles.menu}>
					<ul className={headerStyles.list}>
						<li className={headerStyles.item}>
							<a href="" className={headerStyles.link}>Home</a>
						</li>
						<li className={headerStyles.item}>
							<a href="" className={headerStyles.link}>Profile</a>
						</li>
						<li className={headerStyles.item}>
							<a href="" className={headerStyles.link}>Messages</a>
						</li>
						<li className={headerStyles.item}>
							<a href="" className={headerStyles.link}>Docs</a>
						</li>
					</ul>
				</nav>
				<div className={headerStyles.search}>
					<input type="search" />
				</div>
				<button className={headerStyles.burger}>
					<span></span>
				</button>
				<div className={headerStyles.user}>
					{
						p.isLogined ?
							<div className={headerStyles.personalData}>
								<div className={headerStyles.login}>{ p.state.login}</div>
								<div className={headerStyles.email}>{p.state.email}</div>
								<button onClick={p.authOut} type="button">Out</button>
							</div> :
							<NavLink className={headerStyles.login} to='/login'>Login</NavLink>}
					
				</div>
			</div>
		</header>
	)
}


export default Header

