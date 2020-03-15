import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Setlist</h1>
          <h3 className="login-logo">Login</h3>
          <form>
            <input
              className="form-item"
              placeholder="Username goes here..."
              name="username"
              type="text"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
            <h6 className="text-center">Not a user? <a href="/signup"> Signup </a></h6>
          </form>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }
}
export default Login;