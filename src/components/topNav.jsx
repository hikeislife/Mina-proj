import React, { Component } from "react";
import { getTopNav } from '../data/topNav';
//import { textAreaSizer } from '../helpers';

class TopNav extends Component {
	state = {
		mainNav: [],
		selection: "mp",
		activeIndex: 0,
	};

	componentDidMount() {
		this.setState({
			mainNav: getTopNav() 
		});
	}

	componentDidUpdate() {
		//textAreaSizer();
	}

	render() {
		const topNavProps = props => {
			const { onClick, selectedItem } = props;
		}
		return ( <nav>
			<ul>
				{ this.state.mainNav.map(t => 
					<li 
						key={t._id} 
						id={t._id} 
						onClick={() => this.props.onClick(t._id) }
						//className={t._id === selectedItem ? "active" : ""} >
						selectedItem={this.props.selectedTopNav} > 
						{ t.content } 
					</li> 
					) }
			</ul>
		</nav> )
	}
}

export default TopNav;