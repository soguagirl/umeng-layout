import React from 'react';
// Layout 组件
import {
	Main,
	Header,
} from 'components/Layout';

export default class AppMain extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		const mainHeader = (
			<Header>1231231232</Header>
		);
		return (
			<Main header={ mainHeader }>
				{ this.props.children }
			</Main>
		)
	};
};