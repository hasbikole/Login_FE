import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import "./Login.css";
import { useState, createContext  } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function Login() {
  let account = { email: "", password: "" };
  const navigate = useNavigate();
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);
  

  let error = false;
  let errorMessage = '';
  

  const componentDidMount = async (userInfo) => {
    account = { email, password };
    axios
      .post("http://localhost:8000/api/auth/login-email", account)
      .then( (response) => {
        localStorage.setItem('currentUser', response.data.data.first_name);
        
        navigate("/Home");
        
      })
      .catch((err) => {
        window.alert("Kullanıcı adı veya parola hatalı");
        
      });
  };

  const borderStyle = error ? "1px solid red" : "1px solid black"

  const emailChange = (event) => {
    setMail(event.target.value);
    event.preventDefault();
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
    event.preventDefault();
  };

  const signinClick = () => {
    account = {
      email,
      password,
    };
    
    localStorage.setItem("login", JSON.stringify(account));
    setAuthenticated(account);
    componentDidMount(account).then(async (res) => {
      error = true
      
    });
    // navigate("/Home");
  };

  const navigateToRegister = () => {
    navigate("/Register");
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{ width: "185px" }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1 pt-5">We are The Lotus Team</h4>
            </div>
             
            <p>Please login to your account</p>
            <label>Mail</label>
              <input wrapperClass="mb-4" value={email} label={errorMessage} onChange={emailChange} id="form33" type="text" />
            
            
            <label>Password</label>
            <input style={{border: borderStyle}} wrapperClass="mb-4" value={password} onChange={passwordChange}  id="form2" type="password" />

            <div className="text-center pt-1 mb-5 pb-1">
              <button className="mb-4 w-100 gradient-custom-2" onClick={signinClick}>
                Sign in
              </button>

              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn onClick={navigateToRegister} outline className="mx-2" color="danger">
                Register Now
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
