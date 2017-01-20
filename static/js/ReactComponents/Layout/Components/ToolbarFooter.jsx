import React from 'react';
export default class ToolbarFooter extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		// 导航
		return (
			<div className='g-toolbar-footer'>{ this.props.children }</div>

		)
	};
};