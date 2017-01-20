import React from 'react';
export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		// 导航
		return (
			<div className='g-footer'>{ this.props.children }</div>
		)
	};
};