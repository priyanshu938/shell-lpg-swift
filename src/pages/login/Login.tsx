import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { NotificationContext } from "../../contexts/NotificationContext";
import { SERVER_URL } from "../../utils/ServerUrl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setSeverity, setMessage, setOpen } = useContext(NotificationContext);
  const navigate = useNavigate();

  const handleSubmit =async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // if (password.length < 6) {
    //   setOpen(true);
    //   setMessage("Password must be atleast 6 characters");
    //   setSeverity("error");
    //   return;
    // }
    // //password must contain atleast one uppercase, one lowercase, one number and one special character
    // const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    // if (!regex.test(password)) {
    //   setOpen(true);
    //   setMessage(
    //     "Password must contain atleast one uppercase, one lowercase, one number and one special character"
    //   );
    //   setSeverity("error");
    //   return;
    // }
    try {
      console.log(JSON.stringify({
        email,
        password
      }));
      const res=await fetch(`${SERVER_URL}/Users/Login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:"",
          id:0,
          address:"",
          phone:"",
          email,
          password
        })
      })
      const data=await res.json();
      console.log(data);
      // if(!data){
      //   setOpen(true);
      //   setMessage(data.message);
      //   setSeverity("error");
      //   return;
      // }
      // else
      // {
        localStorage.setItem("token", data.token);
        setSeverity("success");
        setMessage("Logged in successfully");
        setOpen(true);
        setEmail("");
        setPassword("");
        navigate("/");
      // }
      
    } catch (error) {
      console.log(error);
      setOpen(true);
      setMessage("Something went wrong");
      setSeverity("error");
      return;

      
    }

  
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
