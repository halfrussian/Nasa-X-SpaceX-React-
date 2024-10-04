import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaBars, FaTimes } from "react-icons/fa";



const Bars = () => {

  
  //export const [show, setShow] = useState(false)
  //onClick={setShow(true)} 
  //test

  return (
   <Wrapper>
 <div className="bars"><FaTimes className='bars' /></div>
   </Wrapper>
  )
}


 const Navigation = () => {

  const { loginWithRedirect, logout} = useAuth0();
  const {isAuthenticated} = useAuth0();
  
  

    return (
      
        <Wrapper>
        <label htmlFor="checkbox" className='menu-toggler' id="menu-toggler ">
          <div className="bars"><FaBars className='bars' /> </div>
         
        </label>
        
        <input type="checkbox" id="mycheckbox" />
            <nav className='nav'>
            { isAuthenticated ? (
              <>
              
                <ul id='ul' >
                    <img src="https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png" alt="" style={{width: '40px', height: '40px'}} />
                    <Link to='/' className='link'><li className='li'>Crew</li></Link>
                    <Link to='/mars' className='link'><li className='li'>Mars</li></Link>
                    <Link to='/whos-in-space' className='link'><li className='li'>Who</li></Link>
                    <li onClick={() => logout()} > Logout</li>
                    
                </ul>
                <div className="log"></div>
            </>
            ) : (
              <>
                <ul>
                    <img src="https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png" alt="" style={{width: '40px', height: '40px'}} />
                    <li onClick={() => loginWithRedirect()} > Login</li>
                   
                </ul>
                <div className="log"></div>
            </>
            )}
            </nav>
        </Wrapper>
    )
}

const Wrapper = styled.div`





.link {
  color: white !important;
  text-decoration: none;
}

.bars {
  padding: 8px !important;
    display: none;
 
}

#mycheckbox {
  display:none;
}

@media (max-width: 832px) {
  #mycheckbox {
    opacity: 0;
    display:block;
 z-index: 999;
  width: 50px;
  position: absolute;
  top: 25px;
  left: 6px;
}
#mycheckbox:hover {
  cursor: pointer;
}


  .mycheckbox:checked + .nav {
  left: 0rem !important;
}

#mycheckbox:checked + .nav {
  left: 0rem !important;
}

  .nav{
    left: -50rem;
    transition: all 1s;
  }
  .log {
  padding-bottom: 100% !important;
}

  .bars {
    display: flex;
    align-items: center !important;
    justify-content: start;
    opacity: 1;
    color: white;
    font-size:30px;
}

.bars:hover {
  cursor: pointer;
}
  .nav{
    z-index: 9999;
    position: fixed;
    width: 100%;

  }
  ul {
    display: flex;
    flex-direction: column;

  }
  img {
    padding-left: 4% !important;
    padding-bottom: 2% !important;
  }
}

.nav {
   color: white;
   background-color: black;
   align-items: center;
   font-family: "Courier New";
}

ul {
display: flex;
justify-content: space-around;
list-style: none;
padding: 20px !important;

}

li {
font-size: 30px;
padding: 5px 20px 5px 20px !important;
background-color:black;
border-radius: 20px;
}

li:hover {
    transition: all 1s;
    cursor: pointer;
    color: black;
    background-color:white;
    border-radius: 20px;
}

`
export default Navigation 
