import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import './Home.css';

export default function Home() {

    const [authenticated, setAuthenticated] = useState(localStorage.getItem("login"));
    const currentUser = JSON.parse(localStorage.getItem("login"))
    useEffect(() => {
        const loggedInUser = localStorage.getItem("login");
        
        if (loggedInUser) {
            
            setAuthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        
        return <Navigate replace to="/Login" />;
    } else {
        return (
           
    <div className='content'>
    
    Welcome To Home Page { currentUser.username } 

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ab dignissimos qui autem, culpa saepe excepturi magnam iure repellat porro molestias molestiae ipsam eos dolorum error voluptate. Dolores, pariatur porro?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ab dignissimos qui autem, culpa saepe excepturi magnam iure repellat porro molestias molestiae ipsam eos dolorum error voluptate. Dolores, pariatur porro?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ab dignissimos qui autem, culpa saepe excepturi magnam iure repellat porro molestias molestiae ipsam eos dolorum error voluptate. Dolores, pariatur porro?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ab dignissimos qui autem, culpa saepe excepturi magnam iure repellat porro molestias molestiae ipsam eos dolorum error voluptate. Dolores, pariatur porro?</p>
    
    
   
    
    </div>
  )
    }

  
}
