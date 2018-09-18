import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import PortfolioFixed from './components/PortfolioFixed';
import PortfolioContent from './components/PortfolioContent';
import Profile from './components/Profile';
import FilterProjects from './components/Projects/FilterProjects';
import Nav from './components/Menu/Nav';
import {skills, eduList, jobsList, projectData} from './data/datasource.js';

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
          <Nav/>
          <PortfolioFixed/>
          <Switch>
              <Route exact path="/" component={PortfolioContent}/>
              <Route exac
                     path="/cv"
                     component={props => {
                         return <Profile skills={skills} eduList={eduList} jobList={jobsList} headerTitle="CV"/>
                     }}
              />
              <Route exact
                     path="/projects"
                     component={props =>{
                         return <FilterProjects data={projectData} headerTitle="Header"/>
                     }}
              />
          </Switch>
      </div>
    );
  }
}

export default App;
