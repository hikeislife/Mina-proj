import React, { Component } from "react";
import { getContent } from '../data/siteContent';




class Container extends Component {
	//state = {}

	renderContent(current) {
	
	let textContent = getContent(current);
	var text = textContent.map(t => t.content);

	return text;
}
	render() {
		return ( <section dangerouslySetInnerHTML={{__html: this.renderContent(this.props.currentPage) }} /> )
	}
}

export default Container;