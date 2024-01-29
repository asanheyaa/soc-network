import { useEffect, useState } from "react"

const ProfileStatusFunc = (props) => {

	let [editMode, setEditeMode] = useState(false),
	[inputValue, setInputValue] = useState(props.status);


	const onChangeFunction = (e) => {
		const value = e.target.value
		setInputValue(value)
		
	}

	useEffect(() => {
		setInputValue(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditeMode(true)
	}
	const deactivateEditMode = () => {
		setEditeMode(false)
		props.updateStatus(inputValue)
	}


	return (
		<div>
			{editMode ?
				<input onChange={onChangeFunction} autoFocus value={inputValue} onBlur={deactivateEditMode} /> :
				<div onClick={activateEditMode}>{props.status || 'No status'}</div>
			}

		</div>
	)
}

export default ProfileStatusFunc