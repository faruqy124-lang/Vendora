import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import "./Auth.css";
import { FaApple, FaArrowLeft, FaEye, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import api from "../services/Api";
import LeftContent from "./LeftContent";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      console.log("operation beings");
      const res = await api.post("/LoginUser", userData);
      console.log(res.status);

      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("user", JSON.stringify(res.data)); // Save just the user object!
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-body">
        <div className="login-container">
        {<LeftContent />}

          {/* <!-- RIGHT PANEL: Interactive Form --> */}
          <div className="form-panel">
            <div>
              {/* <!-- Top Navigation Header --> */}
              <div className="top-nav">
                <Link to="/" className="brand-logo">
                  <div className="logo-icon">
                    <img src={logo} alt="Vendora Logo" className="logo" />
                  </div>
                  <div className="brand-text">
                    VEND<span>ORA</span>
                  </div>
                </Link>
                <Link to="/" className="btn-back">
                  {<FaArrowLeft className="back-icon" />}
                  Back to Home
                </Link>
              </div>

              {/* <!-- Form Heading --> */}
              <div className="form-header">
                <h1 className="form-title">Welcome back</h1>
                <p className="form-subtitle">
                  Log in to your VENDORA account to continue.
                </p>
              </div>

              {/* <!-- LoginForm --> */}
              <form id="loginForm" onSubmit={handleLogin}>
                {/* <!-- Email Floating Group --> */}
                <div className="floating-group">
                  <input
                    type="email"
                    id="emailInput"
                    className="floating-input"
                    placeholder=" "
                    required
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setemail(value);
                    }}
                  />
                  <label for="emailInput" className="floating-label">
                    Email address
                  </label>
                </div>

                {/* <!-- Password Floating Group --> */}
                <div className="floating-group">
                  <input
                    type="password"
                    id="passwordInput"
                    className="floating-input"
                    placeholder=" "
                    required
                    value={password}
                    onChange={(e) => {
                      const value = e.target.value;
                      setpassword(value);
                    }}
                  />
                  <label for="passwordInput" className="floating-label">
                    Password
                  </label>
                  <button
                    type="button"
                    className="input-icon-btn"
                    aria-label="Toggle Password Visibility"
                  >
                    {<FaEye className="eye-icon" />}
                  </button>
                </div>

                <div className="divider">
                  <span>Or with email</span>
                </div>

                {/* <!-- Social Quick Logins --> */}
                <div className="social-group">
                  <button className="btn-social" type="button">
                    {<FaGoogle />}
                    Google
                  </button>
                  <button className="btn-social" type="button">
                    {<FaApple />}
                    Apple
                  </button>
                </div>

                {/* <!-- Options Row --> */}
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="javascript:void(0)" className="forgot-link">
                    Forgot password?
                  </a>
                </div>

                {/* <!-- Submit Button --> */}
                <button type="submit" className="btn-submit">
                  <span id="btnText">Log in</span>
                  <div className="spinner" id="btnSpinner"></div>
                </button>
              </form>
            </div>

            {/* <!-- Footer Signup Switch --> */}
            <div className="form-footer">
              Don't have an account?{" "}
              <a href="index.html#shop">Create one here</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
