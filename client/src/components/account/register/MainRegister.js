import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import "../login/MainLogin.css";

function MainRegister() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const onSubmit = (data) => {
    axios
      .put("/auth/signup", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        setErrorMessage("Invalid input or email is already in use.");
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
            <div className="LoginHeading">REGISTER</div>
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
              autoComplete="new-password"
              ref={register({ required: true, minLength: 5 })}
            />
            <button type="submit" className="btn effect01" target="_blank">
              <span>REGISTER</span>
            </button>
          <br />
          <div className="LoginText">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "inherit" }}>
              Login Here
            </Link>
          </div>
        </div>
      </div>
    </div>
          </form> 
  );
}

export default MainRegister;
