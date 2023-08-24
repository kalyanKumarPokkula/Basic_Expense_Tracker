import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const navigator = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [isvalidMessage, setIsValidMessage] = useState(null);

  function SubmitHandler(e) {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      setIsValidMessage("This is an alert — check it out input Feild!");
    }

    const user = {
      name,
      email,
      password,
    };

    console.log(user);
    async function SignupApi() {
      try {
        let response = await axios.post("http://127.0.0.1:3001/api/v1/signup", {
          ...user,
        });
        localStorage.setItem("token", response.data.data.token);
        setUser(response.data.data);
        navigator("/expenses");
      } catch (error) {
        console.log("error");
      }
    }
    SignupApi();

    setEmail("");
    setName("");
    setPassword("");
  }
  return (
    <div className="sign-container">
      <div
        className="sign"
        style={{
          height: `${isvalidMessage ? "485px" : "450px"}`,
        }}
      >
        <div className="title">SIGN-UP</div>
        {isvalidMessage && <Alert severity="error">{isvalidMessage}</Alert>}
        <div className="input">
          <TextField
            style={{ backgroundColor: "white" }}
            id="filled-basic"
            label="Name"
            value={name}
            variant="filled"
            fullWidth={true}
            onChange={e => {
              setIsValidMessage(null);
              setName(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <TextField
            style={{ backgroundColor: "white" }}
            value={email}
            id="filled-basic"
            label="Email"
            variant="filled"
            type={"email"}
            fullWidth={true}
            onChange={e => {
              setIsValidMessage(null);
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            style={{ backgroundColor: "white" }}
            id="filled-basic"
            value={password}
            label="Password"
            variant="filled"
            type={"password"}
            fullWidth={true}
            onChange={e => {
              setIsValidMessage(null);
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={SubmitHandler}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;