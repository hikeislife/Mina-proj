import React, { Component } from "react";
import SideNav from './sideNav';
import { getTopNav } from '../data/topNav';

class TopNav extends Component {
	state = {
		//items: ["HTML & CSS", "CMD & Git", "JavaScript"],
		//section: ["mp", "hc", "gc", "js"],
		selection: this.props.id,
		test: getTopNav(),
		activeIndex: 0,
	};

	setActive = index => {
		console.log(index)
		this.setState({
			activeIndex: index !== this.state.activeIndex ? index : null
		});
		//item.classList.add("active");
	}

	render() {
		return ( <nav>
			<ul>
				{ this.state.test.map(t => <li key={t._id} id={t._id} onClick={() => this.setActive(1)} className={this.state.activeIndex === 0 ? "" : "active"} > { t.content } </li> ) }
			</ul>
		</nav> )
	}
}

export default TopNav;