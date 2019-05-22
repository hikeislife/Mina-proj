import React, { Component } from "react";
//import SideNav from './sideNav';
import { getTopNav } from '../data/topNav';

class TopNav extends Component {
	state = {
		test: getTopNav(),
		selection: "mp",
		activeIndex: 0,
	};

	setActive = selection => {
		console.log(selection)
		this.setState({
			selection
		});
		//SideNav.loadSideNav(selection);
		//this.SideNav.renderSideMenu(selection);
		
	}

	//t._id
// /*() => this.setActive(t._id)*/
/*className={this.state.activeIndex === 0 ? "" : "active"}*/

	render() {
		return ( <nav>
			<ul>
				{ this.state.test.map(t => <li key={t._id} id={t._id} onClick={() => this.props.onClick(t._id) } > { t.content } </li> ) }
			</ul>
		</nav> )
	}
}

export default TopNav;