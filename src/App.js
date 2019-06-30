import React, { Component } from 'react';
import logo from './logo.svg';
import TopNav from './components/topNav';
import './SCSS/App.scss';
import SideNav from './components/sideNav';
import Container from './components/container';
import Footer from './components/footer';
//import { textAreaSizer } from './helpers';


class App extends Component {
  state = {
    currentSection: "mp",
    currentPage: "mp",
    content: "main content goes here",
  };

  handleTopNavClick = (selected) => {
    const currentSection = selected;
    let currentPage;
    //console.log(currentSection);
    if (currentSection === "js") {
      currentPage = "#uvod_u_js";
      //console.log(currentPage);
    }
    else if (currentSection === "hc") {
      currentPage = "#uvod_u_HTML_i_CSS";
    }
    else if (currentSection === "gc") {
      currentPage = "#uvod_u_cmd";
    }
    this.setState({
      currentSection, 
      currentPage, 
      selectedTopNav: selected,
    });

    //set active class to clicked element of top nav
    const allNavs = document.querySelectorAll("nav ul li");
    for (let i = 0; i < allNavs.length; i++) {
      allNavs[i].classList.remove("active");
    }
    document.querySelector(`#${selected}`).classList.add("active");
  };

  handleSideNavClick = (item) => {
    const currentPage = item;
    this.setState({
      currentPage
    });

    //set active class to clicked element of top nav
    const allNavs = document.querySelectorAll(".sideNav ul li");
    for (let i = 0; i < allNavs.length; i++) {
      allNavs[i].classList.remove("active");
    }
    document.querySelector(`#${item.substring(1)}`).classList.add("active");
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <TopNav onClick={this.handleTopNavClick} currentSection={this.state.currentSection} currentPage={this.state.currentPage} />
      </header>
      <aside>
        <SideNav currentSection={this.state.currentSection} onClick={this.handleSideNavClick} />
      </aside>
      <main className="placeholder">
        <Container currentPage={this.state.currentPage} />
      </main>
      <Footer />
    </div>
  );
 }
}

export default App;
