import React from 'react';
import './Navbar.css';

function Navbar() {

   return (
      <>
      <div className='bg-clors'>
    <div className='container'>
     <nav className='navbar navbar-expand-md navbar-dark'>
      <a href='#'className='navbar-brand'>
        <img className='logo-nav'src='logo192.png'id='logo'/>
        <span>React</span>
      </a>
      <button className='btn btn-sucess navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#toggleMobileMenu'
      aria-controls='toggleMobileMenu'
      aria-expanded='false'
      aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse'id='toggleMobileMenu'>
        <ul className='navbar-nav m-auto text-center'>
          <li>
            <a className='nav-link'href='/'>Docs</a>
          </li>
          <li>
            <a className='nav-link'href='#about-page'>Tutorial</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Blog</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Community</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Contact</a>
          </li>
          <button type='button'className='btn btn-primary'id='logbtn'>Login</button>
         
        </ul>
        
       
      </div>
      
     </nav>
   


    </div>
  
    </div> 
      </>
   )
}

export default Navbar




