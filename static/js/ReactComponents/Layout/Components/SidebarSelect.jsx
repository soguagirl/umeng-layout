import React from 'react';

import {
	Select
} from 'antd';
const Option = Select.Option;

export default class SidebarSelect extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		// 导航
		return (
			<div className='g-sidebar-select'>
				<Select
					size='large'
					value={ this.props.value }
					onChange={ this.props.onChange.bind(this) }
					className='g-sidebar-select-value'
					dropdownClassName='g-sidebar-select-option'
				>
			      	{ this.props.data.map((item) => (
						<Option value={ item.value } key={ item.value }>{ item.name }</Option>
			      	)) }
			    </Select>
		    </div>
		)
	};
};
SidebarSelect.defaultProps = {
	data : [],
	onChange : () => {}
};