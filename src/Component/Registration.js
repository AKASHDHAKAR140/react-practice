import React from "react";
import { useState } from "react";
//import './App.css';
import axios from "axios";
import { Link } from "react-router-dom";

function Form1() {
  const data = { username: "", email: "", password: "" };
  console.log(data)
  const [inputdata, setInputdata] = useState(data);
  const Handler = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  // to save data in server
  const Handlersubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3040/signup1", inputdata)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      Form1
      <br />
      <input
        type="text"         placeholder="    username"
        name="username"
        onChange={Handler}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="   email"
        name="email"
        onChange={Handler}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="    password"
        name="password"
        onChange={Handler}
      />
      <br />
      <br />
      <button onClick={Handlersubmit}>submit</button>
      <button>
        
        <Link to="/login">login</Link>
      </button>
    </div>
  );
}

export default Form1;
