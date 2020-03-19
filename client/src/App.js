import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { UserContext } from "./contexts/userContext"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateSetlist from './pages/CreateSetlist';
import Setlist from './pages/Setlist';
import NoMatch from "./pages/404";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer"


function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <Router>
        {/* <UserContext.Provider> */}
        <div className="body">


          <Switch>

            <Route exact path={["/signup"]}>
              <Signup />
            </Route>
            <Route exact path={["/login"]}>
              <Login />
            </Route>
            <Route exact path={["/setlist"]}>
              <Setlist />
            </Route>
            <Route exact path={["/create-setlist"]}>
              <CreateSetlist />
            </Route>
            <Route exact path={["/"]}>
              <Home />
            </Route>
            <Route>
              <NoMatch />
            </Route>

          </Switch>
          <Footer></Footer>
        </div>
        {/* </UserContext.Provider> */}
      </Router>
    </>
  );
}

export default App;
