import React from 'react';
//import logo from './logo.svg';
import TopNav from './components/topNav';
import './SCSS/App.scss';
import SideNav from './components/sideNav';
import Container from './components/container';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <TopNav />
      </header>
      <aside>
        <SideNav />
      </aside>
      <main className="placeholder">
        <Container />
      </main>
      <Footer />
    </div>
  );
}

export default App;
