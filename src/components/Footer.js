import React from 'react';
import './Footer.css'
{/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" */}
export default function Footer() {
  return (
    

    <footer className="footer footer-icon-top footer-expand-lg footer-dark bg-dark">
      <div id='content-header'>
    <img className='pt-1' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{width: '100px'}} alt="logo" />
                <h6 className="pt-4">We are The Lotus Team</h6>
    </div>
      <div id='footer-list'>
      <a href="https://twitter.com/mywebsite">Twitter</a>
    <a href="https://www.facebook.com/mywebsite">Facebook</a>
    <a href="https://www.instagram.com/mywebsite/">Instagram</a>
        
      </div>
      
    </footer>
    
      
  )
}
