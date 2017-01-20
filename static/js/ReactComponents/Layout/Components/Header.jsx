import React from 'react';
export default class Header extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		// 导航
		return (
			<header className='g-header'>{ this.props.children }</header>
		)
	};
};