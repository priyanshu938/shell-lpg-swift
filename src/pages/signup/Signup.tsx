import React, { useState, useContext } from "react";
import styles from "./Signup.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { NotificationContext } from "../../contexts/NotificationContext";
import { SERVER_URL } from "../../utils/ServerUrl";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setSeverity, setMessage, setOpen } = useContext(NotificationContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name.length < 6) {
      setOpen(true);
      setMessage("Name must be atleast 6 characters");
      setSeverity("error");
      return;
    }
    if (password.length < 6) {
      setOpen(true);
      setMessage("Password must be atleast 6 characters");
      setSeverity("error");
      return;
    }
    if (password !== confirmPassword) {
      setOpen(true);
      setMessage("Password and Confirm Password must be same");
      setSeverity("error");
      return;
    }
    //password must contain atleast one uppercase, one lowercase, one number and one special character
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    if (!regex.test(password)) {
      setOpen(true);
      setMessage(
        "Password must contain at least one uppercase, one lowercase, one number, and one special character"
      );
      setSeverity("error");
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPassword("");
    setConfirmPassword("");
    try {
      const res = await fetch(`${SERVER_URL}/Users/Register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, address, password }),
      });
      const data = await res.json();
      if (data) {
        setOpen(true);
        setMessage("Signup successful");
        setSeverity("success");
        navigate("/login");
      }
    } catch (error) {
      setOpen(true);
      setMessage("Signup failed");
      setSeverity("error");
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>🔏Signup🔏</h1>
        <div className={styles.inputContainer}>
          <AccountCircleIcon className={styles.icon} />
          <input
            type="text"
            placeholder="Enter your full name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <EmailIcon className={styles.icon} />
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <LocalPhoneIcon className={styles.icon} />
          <input
            type="tel"
            pattern="[0-9]{10,11}"
            placeholder="Enter phone number..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <HomeIcon className={styles.icon} />
          <input
            type="text"
            placeholder="Enter your address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <LockIcon className={styles.icon} />
          <input
            type={!showPassword ? "password" : "text"}
            placeholder="Enter password..."
            className={styles.passwordInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!showPassword ? (
            <VisibilityIcon
              className={styles.icon}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <VisibilityOffIcon
              className={styles.icon}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        <div className={styles.inputContainer}>
          <LockIcon className={styles.icon} />
          <input
            type={!showConfirmPassword ? "password" : "text"}
            placeholder="Enter confirm password..."
            className={styles.passwordInput}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {!showConfirmPassword ? (
            <VisibilityIcon
              className={styles.icon}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          ) : (
            <VisibilityOffIcon
              className={styles.icon}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          )}
        </div>

        <div className={styles.loginAndRegisterContainer}>
          <button className={styles.loginButton} type="submit">
            Signup
          </button>
          <div>
            <Link to="/login" className={styles.registerText}>
              Already have an account? Login
              {/* <span className={styles.registerLink}> */}
              {/* </span> */}
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
