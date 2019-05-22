import React, { Component } from "react";
import { getMenu } from '../data/menu';
import TopNav from './topNav';

class SideNav extends Component {
	// state = {
	// 	//current: this.TopNav.id,
	// 	current: "js",
	// 	};

	renderSideMenu(current) {
		console.log(current)
		let links = getMenu(current);
		var menu = links.map(item => <a href={ item.urls } key={ item._id }><li key={item._id}>{ item.items }</li></a>)
		return menu;
	};


	render() {

		//loadSideNav = id => {console.log("called from top nav", id);}

		return ( <div className="sideNav" >
			<ul>
				{ this.renderSideMenu("mp") }
			</ul>
		</div> )
	};
}

export default SideNav;