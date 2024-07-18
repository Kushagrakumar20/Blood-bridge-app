import React from 'react'
import { MdBloodtype } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const {user} = useSelector(state => state.auth)


    // Logout handler
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear()
        alert("Logout successfully")
        navigate('/login')
    }
  return (
    <>
      <nav className='navbar'>
        <div className="container-fluid">
            <div className="navbar-brand"><MdBloodtype color='red'/>  Blood Bridge App</div>
            <ul className="navbar-nav flex-row">
                <li className="nav-item mx-3">
                    <p className="nav-link">
                    <FaUsers /> Welcome{" "} 
                    {user?.name || user?.hospitalName || user?.organisationName}{" "} 
                    &nbsp;
                    <span className="badge text-bg-secondary">{user?.role}</span>
                    </p> 
                </li>
                <li className="nav-item mx-3">
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
