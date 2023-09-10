import React, { useState } from "react";
import styles from "./Login.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
    console.log(email, password);
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>🔏Login🔏</h1>
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
        <div className={styles.inputAndErrorContainer}>
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
        </div>
        <div className={styles.loginAndRegisterContainer}>
          <button className={styles.loginButton} type="submit">
            Login
          </button>
          <div>
            <Link to="/signup" className={styles.registerText}>
              Don't have an account? Register
              {/* <span className={styles.registerLink}> */}
              {/* </span> */}
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
