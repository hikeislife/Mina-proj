import React, { Component } from 'react';
//import logo from './logo.svg';
import TopNav from './components/topNav';
import './SCSS/App.scss';
import SideNav from './components/sideNav';
import Container from './components/container';
import Footer from './components/footer';

class App extends Component {
  state = {
    currentSection: "mp",
    currentPage: "mp",
    content: "main content goes here",
  };

  handleTopNavClick = (selected) => {
    const currentSection = selected;
    this.setState({
      currentSection
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
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <TopNav onClick={this.handleTopNavClick} />
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
