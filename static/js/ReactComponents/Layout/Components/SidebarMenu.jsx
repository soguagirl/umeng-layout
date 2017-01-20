import React from 'react';
import {
	hashHistory,
} from 'react-router';
import {
	Menu
} from 'antd';
const SubMenu = Menu.SubMenu;

export default class SidebarMenu extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		// 导航
		return (
			<div className='g-sidebar-menu'>
				<Menu 
					mode='inline'
				>
					<SubMenu key='sub1' title={<span><i className='iconfont g-sidebar-menu-title'>&#xe633;</i><span>Navigation One</span></span>}>
						<Menu.Item key='19'>Option 9</Menu.Item>
						<Menu.Item key='110'>Option 10</Menu.Item>
						<Menu.Item key='111'>Option 11</Menu.Item>
						<Menu.Item key='112'>Option 12</Menu.Item>
					</SubMenu>
					<SubMenu className='g-sidebar-menu-nosub' key='sub2' title={<span><i className='iconfont g-sidebar-menu-title'>&#xe64f;</i><span>Navigation Two</span></span>}>
					</SubMenu>
					<SubMenu key='sub4' title={<span><i className='iconfont g-sidebar-menu-title'>&#xe64b;</i><span>Navigation Three</span></span>}>
						<Menu.Item key='39'>Option 9</Menu.Item>
						<Menu.Item key='310'>Option 10</Menu.Item>
						<Menu.Item key='311'>Option 11</Menu.Item>
						<Menu.Item key='312'>Option 12</Menu.Item>
					</SubMenu>
					<SubMenu key='sub5' title={<span><i className='iconfont g-sidebar-menu-title'>&#xe625;</i><span>Navigation Three</span></span>}>
						<Menu.Item key='9'>Option 9</Menu.Item>
						<Menu.Item key='10'>Option 10</Menu.Item>
						<Menu.Item key='11'>Option 11</Menu.Item>
						<Menu.Item key='12'>Option 12</Menu.Item>
					</SubMenu>
				</Menu>
			</div>
		);
	};
};