import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { BirthdayPicker } from "react-birthday-picker";
import "./Register.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { formatPhoneNumber } from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Register() {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone] = useState("");
  const [role_id, setRoleId] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  let infos = {};

  const registerClick = () => {
    infos = {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      role_id: selectedOption,
      birth_date,
      gender: selectedGender
    };

    
    axios
      .post("http://localhost:8000/api/auth/register-email", infos)
      .then((res) => {
        navigate("/Login");
      })
      .catch((err) => {});
  };

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      
      object.target.value = object.target.value.slice(0, object.target.maxLength);
    }
  };

  const backToLoginClick = () => {
    navigate("/Login");
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSelectGender = (e) => {
    setSelectedGender(e.target.value);
    
  };

  const selectGender = [
    { value: "1", label: "Erkek" },
    { value: "2", label: "Kadın" },
  ];

  const selectOption = [
    { value: "1", label: "Admin" },
    { value: "2", label: "Company" },
    { value: "3", label: "User" },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  // formatPhoneNumber('+12133734253') === '(213) 373-4253'

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{ width: "185px" }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>

            <p>Please login to your account</p>

            <label id="name">First Name</label>
            <MDBInput
              wrapperClass="mb-4"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              id="firstname"
            />
            <label id="surname">Last Name</label>
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              id="lastname"
            />
            <label id="phonenumber">Phone Number</label>

            <PhoneInput placeholder="Enter phone number" defaultCountry="TR" value={phone_number} onChange={setPhone} />

            <br />
            <label id="usurname">Email</label>
            <MDBInput
              type="email"
              wrapperClass="mb-4"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
            />
            <label id="password">Password</label>
            <MDBInput
              wrapperClass="mb-4"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
            />

            <label id="birthdate">Birth Date</label>
            <MDBInput
              wrapperClass="mb-4"
              placeholder="1997.03.03"
              value={birth_date}
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
              id="birthdate"
            />

            <label htmlFor="select">Select an option:</label>
            <select id="select" value={selectedOption} onChange={handleSelectChange}>
              <option value="">Select an option</option>
              {selectOption.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <br />

            <label htmlFor="gender">Select an gender:</label>
            <select id="gender" value={selectedGender} onChange={handleSelectGender}>
              <option value="">Select an gender</option>
              {selectGender.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <br />
            <div className="text-center pt-1 mb-5 pb-1">
              <button className="mb-4 w-100 gradient-custom-2" onClick={registerClick}>
                Register
              </button>

              <button className="mb-4 w-100 gradient-custom-2" onClick={backToLoginClick}>
                Already Have An Account?
              </button>
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
