/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import user_icon from "../../assets/person.png";
import "./style.css";

const LoginSingnUp = () => {
  const location = useLocation();
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let passReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,24})/;
    if (name === "" || email === "" || password === "") {
      setError("kindly fill all the fields");
    } else if (reg.test(email) === false) {
      setError("Invalid Email Format");
    } else if (passReg.test(password) === false) {
      setError("Invalid Password Format");
    } else {
      setName("");
      setEmail("");
      setPassword("");
      localStorage.setItem("login", JSON.stringify(true));
      window.location.href = "/home";
    }
  };

  const loginHandler = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let passReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,24})/;
    if (email === "" || password === "") {
      setError("kindly fill all the fields");
    } else if (reg.test(email) === false) {
      setError("Invalid Email Format");
    } else if (passReg.test(password) === false) {
      setError("Invalid Password Format");
    } else {
      setName("");
      setEmail("");
      setPassword("");
      localStorage.setItem("login", JSON.stringify(true));
      window.location.href = "/home";
    }
  };

  const submitButtonHandler = () => {
    action === "Sign Up" ? registerHandler() : loginHandler();
  };

  const clickHereHandler = () => {
    action === "Sign Up" ? setAction("Login") : setAction("Sign Up");
  };

  useEffect(() => {
    location.pathname === "/login" ? setAction("Login") : setAction("Sign Up");
  }, []);

  useEffect(() => {
    if (error !== "") {
      alert(error);
      setName("");
      setEmail("");
      setPassword("");
      setError("");
    }
  }, [error]);

  return (
    <div className="main-container">
      <div className="container-auth">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Sign Up" ? (
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          ) : (
            <div></div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="text-link">
          {action === "Sign Up" ? "Already a user?" : "New to here?"}{" "}
          <span onClick={clickHereHandler}>Click Here</span>
        </div>
        <div className="submit-container">
          <div className="submit" onClick={submitButtonHandler}>
            {action}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSingnUp;
