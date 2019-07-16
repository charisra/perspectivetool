import React from 'react';
import './App.css';
import {Results} from './components/Results';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {

    render() {
      return (
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
        </BrowserRouter>
      );
    }
  }

export default App;
