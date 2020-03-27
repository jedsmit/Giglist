import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { AuthContext } from "./contexts/authContext/authContext"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateSetlist from './pages/CreateSetlist';
import SetlistPage from './pages/SetlistPage';
import NoMatch from "./pages/404";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer"
import AuthState from "./contexts/authContext/AuthState"
import { SetlistProvider } from "./contexts/setlistContext/SetlistContext"



function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <Router>
        <AuthContext.Provider>
          <SetlistProvider>

            <div className="body">

              <Switch>

                <Route exact path={["/signup"]}>
                  <Signup />
                </Route>
                <Route exact path={["/login"]}>
                  <Login />
                </Route>
                <Route path={["/setlistPage"]} component={SetlistPage}>
                  <SetlistPage />
                </Route>
                <Route path={"/create-setlist"} component={CreateSetlist}>
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
          </SetlistProvider>
        </AuthContext.Provider>
      </Router>
    </>
  );
}

export default App;
