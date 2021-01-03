import React, { useState, useContext, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "context/AuthContext";
import "./MainLogin.css";


function MainLogin() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  const { auth, token, userId } = useContext(AuthContext);
  const [, setIsAuth] = auth;
  const [, setTokenValue] = token;
  const [, setUserIdValue] = userId;

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const onSubmit = (data) => {
    axios
      .post("/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        setIsAuth(true);
        setTokenValue(res.data.token);
        setUserIdValue(res.data.userId);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        history.goBack();
      })
      .catch((err) => {
        setErrorMessage("Invalid input or email does not exist.");
      });
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="LoginContainer">
      <div className="LoginFormWrapper">
        <div className="LoginForm">
            {errors.password && (
              <p className="LoginText" style={{ color: "red" }}>
                Password is invalid
              </p>
            )}
            {errors.email && (
              <p className="LoginText" style={{ color: "red" }}>
                Email is invalid
              </p>
            )}
            <p className="LoginText" style={{ color: "red" }}>
              {errorMessage}
            </p>
            <div className="LoginHeading">LOGIN</div>
            <p className="LoginText">Please enter your e-mail and password:</p>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              autoComplete="username"
              ref={(e) => {
                  register(e, {required: true, minLength: 5})
                  inputRef.current = e
                }
              }
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              ref={register({ required: true, minLength: 5 })}
            />
            <button type="submit" className="btn effect01" target="_blank">
              <span>LOGIN</span>
            </button>
          <br />
          <div className="LoginText">
            Don't have an account yet?{" "}
            <Link to="/register" style={{ color: "inherit" }}>
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
}

export default MainLogin;
