import React, { Fragment } from 'react';
import Header from './components/header/header.component';
import './assets/main.css';
import Nav from './components/nav/nav.comonent';
import Home from './components/home/home.component';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="flex ">
        <Nav />
        <div className="flex-1">
          <Home />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
