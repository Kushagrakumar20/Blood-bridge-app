import React from 'react'
// import { userMenu } from './userMenu'
import { useLocation, Link } from 'react-router-dom'
import "../../../../styles/Layout.css";
import { useSelector } from 'react-redux';
const Sidebar = () => {
  // GET USER STATE
  const { user } = useSelector(state => state.auth)


  const location = useLocation()

  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === 'organisation' && (
            <>
              <div className={`menu-item ${location.pathname === "/" && "active"}`} >
                <i className='fa-solid fa-warehouse'></i>
                <Link to="/">Inventory</Link>
              </div>
              <div className={`menu-item ${location.pathname === "/donar" && "active"}`} >
                <i className='fa-solid fa-hand-holding-medical'></i>
                <Link to="/donar">Donar</Link>
              </div>
              <div className={`menu-item ${location.pathname === "/hospital" && "active"}`} >
                <i className='fa-solid fa-house-medical'></i>
                <Link to="/hospital">Hospital</Link>
              </div>
            </>
          )}
          {(user?.role === 'donar' || user?.role === "hospital") && (
            <div className={`menu-item ${location.pathname === "/organisation" && "active"}`} >
              <i className='fa-regular fa-building'></i>
              <Link to="/organisation">Organisation</Link>
            </div>
          )}




          {/* {userMenu.map((menu) => {
                const isActive = location.pathname === menu.path
                return (
                    <div key={menu.path} className={`menu-item ${isActive ? 'active' : ''}`} >
                        <i className={menu.icon}></i>
                        <Link to={menu.path}>{menu.name}</Link>
                    </div>
                )
            })} */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
