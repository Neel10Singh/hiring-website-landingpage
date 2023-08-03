import { useEffect, useState } from 'react'
import React from 'react'

function NavBar({ islogin, setIsLogin }) {
  const handleclick = () => {
    const menu = document.getElementById('smallbuttons')
    menu.classList.toggle('smallbuttons2')
    menu.classList.toggle('smallbuttonshidden')
  }
  return (
    <div className='navbar'>
      <button className='pagename'>
        <h1>Jobify</h1>
      </button>
      <div className='smallbuttons'>
        <button className='smallbutton'>Jobs</button>
        <button className='smallbutton'>Internships</button>
        {!islogin ? (
          <button className='smallbutton' onClick={() => setIsLogin(true)}>
            Signin
          </button>
        ) : (
          <button className='smallbutton'>My Dashboard</button>
        )}
        {!islogin ? (
          <button className='smallbutton'>Signup</button>
        ) : (
          <button className='smallbutton' onClick={() => setIsLogin(false)}>
            Logout
          </button>
        )}
      </div>
      <button className='hamburg'>
        <i className='fa fa-bars' onClick={handleclick}></i>
      </button>
      <div className='smallbuttonshidden' id='smallbuttons'>
        <button className='smallbutton'>Jobs</button>
        <button className='smallbutton'>Internships</button>
        {!islogin ? (
          <button className='smallbutton' onClick={() => setIsLogin(true)}>
            Signin
          </button>
        ) : (
          <button className='smallbutton'>My Dashboard</button>
        )}
        {!islogin ? (
          <button className='smallbutton'>Signup</button>
        ) : (
          <button className='smallbutton' onClick={() => setIsLogin(false)}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default NavBar
