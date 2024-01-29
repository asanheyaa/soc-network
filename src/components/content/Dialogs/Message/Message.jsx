import s from './Message.module.css'
import React from 'react'







function Message(p) {

	return (
		<div>
			<div className={s.messageIn}>
				<div className={s.userAvatarIn}></div>
				<div className={s.messageInText}>{p.messageIn}</div>
			</div>
			{/* <div className={s.messageOut}>
				<div className={s.userAvatarOut}></div>
				<div className={s.messageOutText}>{p.messageOut}</div>
			</div> */}
			
		</div>

	)
}


export default Message

