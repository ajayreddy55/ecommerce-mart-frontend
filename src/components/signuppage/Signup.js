import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const SignupForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState({
    name: "",
    nameRequiredText: "",
  });

  const [emailText, setEmailText] = useState({
    email: "",
    emailRequiredText: "",
  });

  const [passwordText, setPasswordText] = useState({
    password: "",
    passwordRequiredText: "",
  });

  const [serverResMsg, setServerResMsg] = useState({
    messageText: "",
    messageTextColor: "",
  });

  const changeTheUsername = (event) => {
    const usernameInput = event.target.value;

    setServerResMsg((prevState) => ({
      ...prevState,
      messageText: "",
      messageTextColor: "",
    }));

    if (usernameInput === "") {
      setUsername((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "Required*",
      }));
    } else {
      setUsername((prevState) => ({
        ...prevState,
        name: usernameInput,
        nameRequiredText: "",
      }));
    }
  };

  const changeTheEmail = (event) => {
    const emailInput = event.target.value;

    setServerResMsg((prevState) => ({
      ...prevState,
      messageText: "",
      messageTextColor: "",
    }));

    if (emailInput === "") {
      setEmailText((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "Required*",
      }));
    } else {
      setEmailText((prevState) => ({
        ...prevState,
        email: emailInput,
        emailRequiredText: "",
      }));
    }
  };

  const changeThePassword = (event) => {
    const passwordInput = event.target.value;

    setServerResMsg((prevState) => ({
      ...prevState,
      messageText: "",
      messageTextColor: "",
    }));

    if (passwordInput === "") {
      setPasswordText((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "Required*",
      }));
    } else {
      setPasswordText((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "",
      }));
    }
  };

  const validateFormData = () => {
    if (username.name === "") {
      setUsername((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "Required*",
      }));
    } else if (emailText.email === "") {
      setEmailText((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "Required*",
      }));
    } else if (passwordText.password === "") {
      setPasswordText((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "Required*",
      }));
    }
  };

  const submitTheForm = (event) => {
    event.preventDefault();

    validateFormData();
  };

  return (
    <div className="signup-form-bg-container">
      <div className="signup-form-card">
        <div className="signup-logo-image-container">
          <img
            className="signup-logo-image"
            src="https://cdn-icons-png.flaticon.com/512/743/743007.png"
            alt="website logo"
          />
          <p className="signup-logo-text">A-Z MART</p>
        </div>
        <form className="signup-form-element" onSubmit={submitTheForm}>
          <div className="d-flex flex-column justify-content-center mt-2 mb-2">
            <label className="signup-label" htmlFor="signupUsername">
              Username
            </label>
            <input
              className="signup-input-ele"
              id="signupUsername"
              placeholder="Enter Your Username"
              type="text"
              value={username.name}
              onChange={changeTheUsername}
            />
            <p className="signup-required-text">{username.nameRequiredText}</p>
          </div>
          <div className="d-flex flex-column justify-content-center mt-2 mb-2">
            <label className="signup-label" htmlFor="signupEmail">
              Email
            </label>
            <input
              className="signup-input-ele"
              id="signupEmail"
              placeholder="Enter Your Email"
              type="text"
              value={emailText.email}
              onChange={changeTheEmail}
            />
            <p className="signup-required-text">
              {emailText.emailRequiredText}
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center mt-2 mb-2">
            <label className="signup-label" htmlFor="signupPassword">
              Password
            </label>
            <input
              className="signup-input-ele"
              id="signupPassword"
              placeholder="Enter Your Password"
              type="password"
              value={passwordText.password}
              onChange={changeThePassword}
            />
            <p className="signup-required-text">
              {passwordText.passwordRequiredText}
            </p>
          </div>
          <div className="signup-submit-button-container">
            <button className="signup-submit-button" type="submit">
              Signup
            </button>
          </div>
          <p
            className={`signup-required-text ${serverResMsg.messageTextColor}`}
          >
            {serverResMsg.messageText}
          </p>
        </form>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-4 mb-3">
        <p className="signup-already-have-text">Already have an Account?</p>
        <button
          className="signup-login-button"
          type="button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
