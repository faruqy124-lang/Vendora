import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import "./Auth.css";
import { FaApple, FaArrowLeft, FaEye, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import api from "../services/Api";
import LeftContent from "./LeftContent";

const Signin = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!firstName.trim()) {
      return; // Stop here. The JSX will show the error because submitted is now true.
    }
    if (
      FirstNameError ||
      LastNameError ||
      PhoneError ||
      EmailError ||
      PasswordError
    ) {
      return;
    }

    console.log("action is fired");

    const userData = {
      firstName,
      lastName,
      email,
      phoneNo,
      password,
    };
    // setuser(userData);

    try {
      console.log("2. about to call api.post");
      const res = await api.post("/registerUser", userData);
      console.log(res.status);

      console.log(res.data);

      // localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/dashboard", { state: { userData: res.data } });
    } catch (err) {
      console.log("FAILED:", err.response?.status, err.response?.data);
    }
  };

  const [trimmedFirst, trimmedLast] = [firstName.trim(), lastName.trim()];

  let FirstNameError =
    trimmedFirst.length > 0 && trimmedFirst.length < 3
      ? "First name must be at least 3 characters"
      : "";

  if (/\d/.test(trimmedFirst)) {
    FirstNameError = "First name cannot contain numbers";
  }

  let LastNameError =
    trimmedLast.length > 0 && trimmedLast.length < 3
      ? "First name must be at least 3 characters"
      : "";

  if (/\d/.test(trimmedLast)) {
    LastNameError = "First name cannot contain numbers";
  }

  const trimmedPhone = phoneNo.trim();
  const trimmedEmail = email.trim();

  const PhoneError =
    trimmedPhone.length === 0 ? "Phone number is required" : "";
  const EmailError = trimmedEmail.length === 0 ? "Email is required" : "";
  const PasswordError =
    password.length > 0 && password.length < 6
      ? "Password must be atleast 6"
      : "";

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
                <h1 className="form-title">Create Your Account.</h1>
                <p className="form-subtitle">
                  Join vendora and start you your jounery as a user.
                </p>
              </div>

              {/* <!-- Segmented Role Action Pills --> */}
              <div className="pill-group">
                <button className="pill-btn active" id="pillShop">
                  Shopping
                </button>
                <button className="pill-btn" id="pillSell">
                  Vendor
                </button>
                <button className="pill-btn" id="pillDeliver">
                  Rider
                </button>
              </div>
              <form></form>
              {/* <!-- LoginForm --> */}
              <form id="loginForm" onSubmit={handelSubmit}>
                {/* Input user name */}

                <div className="user-id">
                  <div className="floating-group">
                    <input
                      type="text"
                      id="inputFirstname"
                      className="floating-input"
                      placeholder=" "
                      required
                      value={firstName}
                      onChange={(e) => {
                        const value = e.target.value;
                        setfirstName(value);
                      }}
                    />
                    <label for="emailInput" className="floating-label">
                      First name
                    </label>
                    {FirstNameError && (
                      <ul className="outlog">{FirstNameError}</ul>
                    )}
                  </div>
                  <div className="floating-group">
                    <input
                      type="text"
                      id="emailInput"
                      className="floating-input"
                      placeholder=" "
                      required
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    />
                    <label for="emailInput" className="floating-label">
                      Last Name
                    </label>
                    {LastNameError && (
                      <ul className="outlog">{LastNameError}</ul>
                    )}
                  </div>
                </div>
                {/* <!-- Email Floating Group --> */}
                <div className="user-id">
                  <div className="floating-group">
                    <input
                      type="text"
                      id="emailInput"
                      className="floating-input"
                      placeholder=" "
                      required
                      value={phoneNo}
                      onChange={(e) => setphoneNo(e.target.value)}
                    />
                    <label for="emailInput" className="floating-label">
                      Phone Number
                    </label>
                    {PhoneError && <ul className="outlog">{PhoneError}</ul>}
                  </div>

                  <div className="floating-group">
                    <input
                      type="email"
                      id="emailInput"
                      className="floating-input"
                      placeholder=" "
                      required
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                    <label for="emailInput" className="floating-label">
                      Email address
                    </label>
                    {EmailError && <ul className="outlog">{EmailError}</ul>}
                  </div>
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
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <label for="passwordInput" className="floating-label">
                    Password
                  </label>
                  {PasswordError && <ul className="outlog">{PasswordError}</ul>}
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

                {/* <!-- Submit Button --> */}
                <button type="submit" className="btn-submit" id="btnSubmit">
                  <span id="btnText">Create Account</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
