import React from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('login'));
  let isCurrentUserExist = false;

  const logout = () => {
    localStorage.removeItem('login');
    navigate('/Login');
  }
  if (currentUser == null) {
    isCurrentUserExist = false
  } else {
    isCurrentUserExist = true
  }


  return (
    

<nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              style={{width: '100px'}} alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-3">
      <li className="nav-item active">
        <a className="nav-link">
          <i className="fa fa-home"></i>
          Home
          </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link">
          <i className="fa fa-home"></i>
          About
          </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link">
          <i className="fa fa-home"></i>
          Contact Us
          </a>
      </li>
    </ul>
    
  </div>
  <div className='right-content'>
    
    {
      isCurrentUserExist ? <div><p style={{color:"white"}}>Welcome Home {localStorage.getItem('currentUser')}</p>
      <button id='logout-button' onClick={logout}>Log Out</button>
        </div>  : <p></p> 
    }
  </div>
</nav>

  )
}
