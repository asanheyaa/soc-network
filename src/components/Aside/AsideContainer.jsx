import { connect } from "react-redux";
import StoreContext from "../../storeContext"
import Aside from './Aside';



// function AsideContainer(p) {

// 	// const friendsItem = p.asideData.friends.map(f => <FriendsItem name={f.name} color={f.color} />)

// 	return (
// 		<StoreContext.Consumer>{
// 			(store) => {
// 				let state = store.getState().aside
// 				return <Aside friends={state.friends} />
				
// 			}
// 		}

// 		</StoreContext.Consumer>
// 	)
// }

const mapSatateToProps = (state) => ({
	friends: state.aside.friends
})

const AsideContainer = connect(mapSatateToProps)(Aside)

export default AsideContainer