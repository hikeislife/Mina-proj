import React, { Component } from "react";
import SideNav from './sideNav';
import { getTopNav } from '../data/topNav';

class TopNav extends Component {
	state = {
		items: ["HTML & CSS", "CMD & Git", "JavaScript"],
		section: ["mp", "hc", "gc", "js"],
		selection: this.props.id,
		test: getTopNav(),
	};

	render() {
		return ( <nav>
			<ul>
				{ this.state.test.map(t => <li key={t._id} id={t._id}> { t.content } </li> ) }
				{ /*this.state.items.map(item => <li key={ item }>{ item }&nbsp;&nbsp;| </li> )*/}
				
			</ul>
		</nav> )
	}
}

export default TopNav;