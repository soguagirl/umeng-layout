import React from 'react';
import Footer from './Footer.jsx';
export default class Main extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		// 导航
		return (
			<div className='g-main'>
				{ this.props.header }
				<article className='g-main-container g-scollbar'>
					<div className='g-main-inner'>
						{ this.props.children }
					</div>
					{ this.props.footer }
				</article>
			</div>
		)
	};
};
Main.defaultProps = {
	header: null,
	footer: <Footer>&copy; 2002-2016 cnzz.com 版权所有 ICP备:浙B2-20080101</Footer>,
};