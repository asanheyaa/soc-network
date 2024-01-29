// import React from "react"

// class ProfileStatusComponent extends React.Component{
	
// 	state = {
// 		editMode: false,
// 		inputText: this.props.status
// 	}

// 	toggleEditingMode = () => {
// 		if (this.state.editMode){
// 			this.setState({ editMode: false })
// 			this.props.updateStatus(this.state.inputText)
// 		} else {
// 			this.setState({ editMode: true })
// 		}
// 	}

// 	onChangeFunction = (e) => {
// 		const value = e.target.value
// 		this.setState({inputText: value})
// 	}

// 	componentDidUpdate(prevProps) {
// 		if (prevProps.status !== this.props.status) {
// 			this.setState({
// 				inputText: this.props.status
// 			})
// 		}
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{!this.state.editMode ?
// 					<div onClick={this.toggleEditingMode}>{this.props.status || 'No status'}</div> :
// 					<input autoFocus onChange={this.onChangeFunction} onBlur={this.toggleEditingMode} value={this.state.inputText} />}
				
// 			</div>
// 		)
// 	}
// }

// export default ProfileStatusComponent