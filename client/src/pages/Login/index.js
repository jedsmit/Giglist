import React, { useState } from "react";
import "./login.css";
import API from "../../utils/API"






function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username + " " + " " + password)
    API.loginUser(
      {
        username: username,
        password: password
      })
      .then(res => console.log(res.body))
      .catch(err => console.log(err)
      );
  }
  return (
    <>
      <div className="center">
        <div className="card">
          <h1>Setlist</h1>
          <h3 className="login-logo">Login</h3>
          <form>
            <input
              className="form-item"
              placeholder="username"
              name="username"
              type="text"
              onChange={e => {
                setUsername(e.target.value)
              }}
            />
            <input
              className="form-item"
              placeholder="password"
              name="password"
              type="password"
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
            <button
              className="form-submit"
              value="SUBMIT"
              type="submit"
              onClick={handleSubmit}

            >Login</button>
            <h6 className="text-center">Not a user? <a href="/signup"> Signup </a></h6>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;