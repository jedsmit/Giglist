import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateSetlist from './pages/CreateSetlist';
import Setlist from './pages/Setlist';



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>

          <Route path="/setlist">
            <Setlist />
          </Route>
          <Route path="/create-setlist">
            <CreateSetlist />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
