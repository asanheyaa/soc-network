import { useState } from 'react';
import s from './Users.module.css'



function Paginator({ totalItems, maxTotalCount, currentPage, changePage, portionSize = 10 }) {

	// const pages = () => {
	// 	let pagesCount = totalItems / maxTotalCount;
	// 	let pages = []
	// 	for (let index = 1; index <= 10; index++) {
	// 		pages.push(index)
	// 	}

	// 	return pages
	// }
	let pagesCount = totalItems / maxTotalCount;
	let pages = []
	for (let index = 1; index <= pagesCount; index++) {
		pages.push(index)
	}



	let	portionCount = Math.ceil(pagesCount / portionSize),
		[portionNumber, setPortionNumber] = useState(Math.ceil(currentPage  * 0.1)),
		leftPortionPageNumber = (portionNumber - 1) * portionSize + 1,
		rightPortionPageNumber = portionNumber * portionSize
	const itemsPaginator = pages.map(p => {
		if (p >= leftPortionPageNumber && p <= rightPortionPageNumber) {
			return (
				<button key={p} className={`${s.paginationItem} ${currentPage === p && s.active}`}
					onClick={() => { changePage(p) }} type='button'>{p}</button>
			)
		}
	})

	return (
		<div>
			{portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
			{itemsPaginator}
			{portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
		</div>
	)
}




export default Paginator