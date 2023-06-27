import React from 'react';
// import { Counter } from './features/CounterSlice';
import Header from './components/Header';
import Sidebar from './features/Sidebar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
    <Router>
      <>
      <Header/>
      <AppBody>
        <Sidebar/>
        <Switch>
          <Route path="/" exact>
            {/* Chat components */}
          </Route>
        </Switch>
      </AppBody>

      </>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
