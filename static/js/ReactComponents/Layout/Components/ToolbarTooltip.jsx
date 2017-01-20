import React from 'react';

import {
	Tooltip
} from 'antd';

export default class ToolbarTooltip extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		// 导航
		return (
			<Tooltip
				title={this.props.title}
				placement='right'
				align = {{offset: [0,0]}}
				overlayClassName='g-toolbar-tooltip'>
				{ this.props.children }
			</Tooltip>
		)
	};
};