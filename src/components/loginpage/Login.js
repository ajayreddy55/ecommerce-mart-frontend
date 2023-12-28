import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import GoogleButton from "react-google-button";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState({
    email: "",
    emailRequiredText: "",
  });

  const [loginPassword, setPassword] = useState({
    password: "",
    passwordRequiredText: "",
  });

  const [loginServerMessage, setLoginServerMessage] = useState("");

  const changeTheLoginEmail = (event) => {
    const emailInput = event.target.value;

    setLoginServerMessage("");

    if (emailInput === "") {
      setLoginEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "Required*",
      }));
    } else {
      setLoginEmail((prevState) => ({
        ...prevState,
        email: emailInput,
        emailRequiredText: "",
      }));
    }
  };

  const changeTheLoginPassword = (event) => {
    const passwordInput = event.target.value;

    setLoginServerMessage("");

    if (passwordInput === "") {
      setPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "Required*",
      }));
    } else {
      setPassword((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "",
      }));
    }
  };

  const validateLoginForm = () => {
    if (loginEmail.email === "") {
      setLoginEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "Required*",
      }));
    } else if (loginPassword.password === "") {
      setPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "Required*",
      }));
    }
  };

  const submitLoginForm = (event) => {
    event.preventDefault();

    validateLoginForm();
  };

  return (
    <div className="login-form-bg-container">
      <div className="login-form-card mb-3 mt-4 shadow">
        <div className="login-logo-image-container">
          <img
            className="login-logo-image"
            src="https://cdn-icons-png.flaticon.com/512/743/743007.png"
            alt="website logo"
          />
          <p className="login-logo-text">A-Z MART</p>
        </div>
        <form className="login-form-element" onSubmit={submitLoginForm}>
          <div className="d-flex flex-column justify-content-center mt-2 mb-2">
            <label className="login-label" htmlFor="loginEmail">
              Email
            </label>
            <input
              className="login-input-ele"
              id="loginEmail"
              placeholder="Enter Your Email"
              type="text"
              value={loginEmail.email}
              onChange={changeTheLoginEmail}
            />
            <p className="login-required-text">
              {loginEmail.emailRequiredText}
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center mt-2 mb-2">
            <label className="login-label" htmlFor="loginPassword">
              Password
            </label>
            <input
              className="login-input-ele"
              id="loginPassword"
              placeholder="Enter Your Password"
              type="password"
              value={loginPassword.password}
              onChange={changeTheLoginPassword}
            />
            <p className="login-required-text">
              {loginPassword.passwordRequiredText}
            </p>
          </div>
          <div className="login-submit-button-container">
            <button className="login-submit-button" type="submit">
              Login
            </button>
          </div>
          <p className="login-required-text">{loginServerMessage}</p>
        </form>
        <div className="login-hr-google-width-set">
          <hr className="login-hr-line" />
        </div>
        <div className="mt-4 mb-4 login-hr-google-width-set">
          <GoogleButton className="w-100" />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-4 mb-3">
        <p className="login-dont-have-text">Don't have an Account?</p>
        <button
          className="login-sign-up-button"
          type="button"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
