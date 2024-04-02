import React from 'react'
import './footer.css'
import { CgMail } from "react-icons/cg";
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-row'>      
        <div className='footer-col'>
            <h4>Language</h4>
              <ul className="links">
                <li><Link to="#">English</Link></li>
                <li><Link to="#">Tamil</Link></li>
                <li><Link to="#">Kannada</Link></li>   
              </ul>
            </div>
            <div className='footer-col'>
            <h4>Skills</h4>
              <ul className="links">
              <li><Link to="#">Java</Link></li>
                <li><Link to="#">HTML & CSS</Link></li>
                <li><Link to="#">React.js</Link></li>  
                <li><Link to="#">JavaScript</Link></li> 
              </ul>
            </div>

            <div className='footer-col'>
            <h4>Contect us</h4>
              <ul className="links">
                <li><Link to="#"><CgMail  /> suresh16palani@gmail.com</Link></li>
                <li><Link to="#"><IoIosPhonePortrait /> 8778476778</Link></li>  
              </ul>
            </div>

          
            
        </div>
    </div>
  )
}

export default Footer