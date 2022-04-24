import React, { useState } from "react";
import "./login.scss";

function LoginForm({ Login }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler} className="login">
      <div className="login_inner">
        <h2>Login</h2>
        <div className="form-group-name">
          <label htmlFor="name">Name:</label>
          <input
            className="input-name"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          ></input>
        </div>
        <div className="form-group-email">
          <label htmlFor="email">Email:</label>
          <input
            className="input-email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          ></input>
        </div>
        <div className="form-group-password">
          <label htmlFor="password">Password:</label>
          <input
            className="input-password"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          ></input>
        </div>
        <input className="input-button" type="submit" value="Login" />
      </div>
    </form>
  );
}

export default LoginForm;
