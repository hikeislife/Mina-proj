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
    currentPage: "test",
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

    // re-render sidenav:
   // renderSideMenu(selected);
  };

  // renderSideMenu(current) {
  //   console.log(current)
  //   let links = getMenu(current);
  //   var menu = links.map(item => <a href={ item.urls } key={ item._id }><li key={item._id}>{ item.items }</li></a>)
  //   return menu;
  // };

  render() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <TopNav onClick={this.handleTopNavClick} />
      </header>
      <aside>
        <SideNav currentSection={this.state.currentSection} />
      </aside>
      <main className="placeholder">
        <Container />
      </main>
      <Footer />
    </div>
  );
 }
}

export default App;
