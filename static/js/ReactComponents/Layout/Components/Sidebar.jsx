import React from 'react';

import {
	Link
} from 'react-router';
export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		// 导航
		return (
			<aside className='g-sidebar'>
				<header className='g-header'>
					<Link className='g-logo-umeng' href='//www.umeng.com/' target='_blank'>
						<svg x='0' y='0' width={50} height={50} viewBox='0 0 50 50'>
							<path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF' d='M17.658,24.273c0.157-0.065,0.313-0.136,0.474-0.194
							c2.745-0.988,3.977-2.712,4.034-5.644c0.055-2.825,1.858-5.21,4.532-5.952c1.364-0.378,2.734-0.283,4.086,0.08
							c0.317,0.086,0.535,0.084,0.808-0.141c2.377-1.956,4.77-3.893,7.157-5.835c0.124-0.102,0.237-0.24,0.378-0.288
							c0.146-0.048,0.355-0.059,0.472,0.016c0.081,0.051,0.102,0.301,0.051,0.42c-0.092,0.216-0.246,0.408-0.393,0.596
							c-1.757,2.279-3.514,4.56-5.286,6.827c-0.238,0.302-0.259,0.524-0.12,0.899c0.827,2.238,0.396,3.3-1.086,4.533
							c-1.765,1.467-3.849,2.335-5.991,3.071C23.831,23.673,20.816,24.316,17.658,24.273z'/>
							<path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF' d='M11.742,32.199c9.048-0.051,16.367-3.6,22.032-10.646
							c-0.563,5.125-3.02,9.041-7.61,11.414C21.251,35.505,16.399,35.09,11.742,32.199z'/>
							<path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF' d='M21.538,35.482c5.907-1.009,10.001-4.251,12.382-9.688
							c-1.468,8.073-4.6,15.169-11.762,20.065C23.323,42.249,23.735,38.797,21.538,35.482z'/>
							<path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF' d='M5.954,26.679c2.876-0.114,5.714-0.146,8.541-0.354
							c5.213-0.383,10.349-1.19,15.182-3.334c0.455-0.202,0.9-0.428,1.34-0.662c0.421-0.225,0.829-0.475,1.374-0.789
							c-0.14,0.214-0.197,0.324-0.274,0.415c-4.001,4.711-9.033,7.651-15.111,8.788c-0.258,0.049-0.589,0.055-0.801-0.067
							c-3.07-1.771-6.425-2.806-9.78-3.845C6.278,26.784,6.132,26.735,5.954,26.679z'/>
						</svg>
					</Link>
					<Link className='g-logo-app' to={ this.props.appLink }><img src={ this.props.appImg }/></Link>
				</header>
				<div className='g-sidebar-container g-scollbar'>
					{ this.props.select }
					{ this.props.menu }
				</div>
			</aside>
		)
	};
};
Sidebar.defaultProps = {
	appLink : '/',
	appImg : '',
	select: null,
	menu: null,
};