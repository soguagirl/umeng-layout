import React from 'react';
// Layout 组件
import {
	Toolbar,
	ToolbarFooter,
	Sidebar,
	SidebarMenu,
	SidebarSelect,
} from 'components/Layout';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		const toolbarMenu = [{
			name: <i className='iconfont'>&#xe642;</i>,
			value: 'report',
			title: '客流'
		}, {
			name: <i className='iconfont'>&#xe646;</i>,
			value: 'profile',
			title: '画像'
		}, {
			name: <i className='iconfont'>&#xe645;</i>,
			value: 'setting',
			title: '管理'
		}];
		const toolbarFooter = (
			<ToolbarFooter>'g-toolbar-footer'</ToolbarFooter>
		);
		const sidebarMenu = (
			<SidebarMenu/>
		);
		const sidebarSelect = (
			<SidebarSelect 
				data={[{name:'总部',value:'all'},{name:'店铺',value:'shop'},{name:'店铺组',value:'group'}]}
				value='all'
				onChange={ (v) => {console.log(v)} }
			/>
		);
		return (
			<div className='g-body'>
 				<Toolbar
 					menu={ toolbarMenu }
 					menuClick={(v) => {
 						console.log (v)
 					}}
 					footer={ toolbarFooter }
 					mini={ false }
 				/>
				<Sidebar
 					appLink='/'
 					appImg={ require('img/app-logo.svg') }
 					select={ sidebarSelect }
 					menu={ sidebarMenu }
 				/>
 				{ this.props.children }
 			</div>
		)
	};
};