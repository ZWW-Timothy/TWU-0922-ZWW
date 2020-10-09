import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
// import Education from './components/Education/Education';
import EducationS from './components/EducationS/EducationS';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <AboutMe />
        <EducationS />
      </main>
    );
  }
}

export default App;
