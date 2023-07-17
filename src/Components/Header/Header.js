import React from 'react';
import './Header.css';
import logo from '../../Images/logoasd.png';
import user from '../../Images/user.jpg';

const Header = (props) => {
  return (
    <div className='headnav'>
        <nav class="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white">
            <a href=''>
                <img src={logo} alt='' title='' className='logo' />
            </a>
            <ul className="navbar-nav align-items-center ms-auto me-lg-4">
                <li className="nav-item no-caret me-3 me-lg-0 dropdown-user dropdown">
                <a className=" btn btn-icon btn-transparent-dark">
                    <img  className="img-fluid userpic" src={user} alt='' title='' />
                </a>
                <button className='mob-menu toggle-menu' onClick={props.handler} >
                <i></i> 
                <i></i>
                <i></i>
                </button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header