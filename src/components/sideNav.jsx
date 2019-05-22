import React, { Component } from "react";
import { getMenu } from '../data/menu';

class SideNav extends Component {

	renderSideMenu(current) {
		let links = getMenu(current);
		var menu = links.map(item => <a href={ item.urls } onClick={() => this.props.onClick(item.urls) } key={ item._id }><li id={item.urls.substring(1)} key={item._id}>{ item.items }</li></a>)
		return menu;
	};


	render() {
		return ( <div className="sideNav" >
			<ul>
				{ this.renderSideMenu(this.props.currentSection) }
			</ul>
		</div> )
	};
}

export default SideNav;