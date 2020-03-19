import React, { useState } from "react";
import API from "../../utils/API"
import "./signup.css";

function Signup() {

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  //save user to database when for is submitted
  const handleSubmit = (e) => {
    console.log(newUser)
    saveUser(newUser);
  }
  // handles text fields on form
  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({
      [e.target.name]: e.target.value
    })
    console.log(newUser)
  }


  // saves user to db
  const saveUser = (newUser) => {
    let username = newUser.username
    let email = newUser.email
    let password = newUser.password
    console.log(newUser)
    API.addUser({
      username: username,
      email: email,
      password: password

    })
      .catch(err => console.log(err))
  }

  return (
    <div className="center">
      <div className="card">
        <h1>Setlist</h1>
        <h3 className="login-logo">Signup</h3>

        <form>
          <input
            className="form-item"
            placeholder="username"
            name="username"
            type="text"
            onChange={handleChange}
          />
          <input
            className="form-item"
            placeholder="email"
            name="email"
            type="text"
            onChange={handleChange}
          />
          <input
            className="form-item"
            placeholder="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <input
            className="form-submit"
            value="SUBMIT"
            type="submit"
            onSubmit={handleSubmit}
          />
          <h6 className="text-center">Already a user? <a href="/login"> Login </a></h6>
        </form>
      </div>
    </div>
  );
}






export default Signup;