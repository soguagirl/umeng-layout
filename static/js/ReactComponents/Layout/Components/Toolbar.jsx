import React from 'react';
import ToolbarTooltip from './ToolbarTooltip';

export default class Toolbar extends React.Component {
	constructor(props) {
		super(props);
		this.cls = document.body.classList;
	};
	componentWillReceiveProps(nextProps) {
		if (nextProps.mini !== this.props.mini) {
			this.handlerMini(nextProps.mini);
		};
	};
	componentDidMount() {
		this.handlerMini(this.props.mini);
	};
	handlerMini(boolean) {
		boolean ? this.cls.add('g-mini') : this.cls.remove('g-mini');
	};
	clickMini() {
		this.cls.contains('g-mini') ? this.handlerMini(false) : this.handlerMini(true);
	};
	render() {
		// 导航
		return (
			<aside className='g-toolbar'>
				<header className='g-header'>
					<div className='g-mini-button' onClick={ this.clickMini.bind(this) }>
						<p><b></b><i></i></p>
					</div>
				</header>
				<div className='g-toolbar-container'>
					<ul className='g-toolbar-menu'>
						{ this.props.menu.map((item) => (
							<li key={ item.value } onClick={ this.props.menuClick.bind(this,item.value) }>
								<ToolbarTooltip title={ item.title }>
									{ item.name }
								</ToolbarTooltip>
							</li>
						)) }
					</ul>
					{ this.props.footer }
				</div>
			</aside>
		)
	};
};
Toolbar.defaultProps = {
	menu: [],
	menuClick : () => {},
	footer: null,
	mini : false
};