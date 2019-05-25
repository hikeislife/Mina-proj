import React, { Component } from "react";
import { getContent } from '../data/siteContent';

class Container extends Component {
	//state = {}

	renderContent(current) {
	
		let textContent = getContent(current);
		var text = textContent.map(t => t.content);

		return text;
	}

	textAreaSizer = () => {
	 const text = document.querySelectorAll(`.code_snippet`);
	 for (let i = 0; i < text.length; i ++) {
	  text[i].style.height = text[i].scrollHeight + 'px';
	  text[i].style.width = `100%`;
	 }
	}

	componentDidMount() {
		this.textAreaSizer();
	}

	componentDidUpdate() {
		this.textAreaSizer();
	}

	render() {
		return ( <section dangerouslySetInnerHTML={{__html: this.renderContent(this.props.currentPage) }} /> )
	}
}

export default Container;