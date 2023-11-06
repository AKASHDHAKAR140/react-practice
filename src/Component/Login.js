import React, { useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const data = { email: "", password: "" };
  const [inputdata, setInputdata] = useState(data);
  const Handler = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  // to save data in server
  const Handlersubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3040/signin", inputdata)
      .then((res) => {
        console.log(res);
        alert("succesfull");
        //navigate("/todo")
      })
      .catch((error) => {
        console.log(error);
        alert(" wrong");
      });
    // alert(" submited")
  };

  return (
    <div>
      Login <br />
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
        placeholder=" password"
        name="password"
        onChange={Handler}
      />
      <br />
      <br />
      <button onClick={Handlersubmit}>submit</button>
      <button>
        <Link to="/">registration</Link>{" "}
      </button>
    </div>
  );
}

export default Login;
