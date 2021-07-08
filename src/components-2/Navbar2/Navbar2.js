import React from 'react';
import './Navbar2.css';

function Navbar2() {
    return (
        <>
         <div className='navbar-bg'>
           <nav className='Navbar'>
              <ul className='Navbar-ul'>
                  <li className='Navbar-li'><a href='#'>Home</a>
                  
                    <div className='subMenu'>
                        <ul>
                            <li><a href='#'>Phrase-1</a></li>
                            <li><a href='#'>Phrase-2</a></li>
                            <li><a href='#'>Phrase-3</a></li>
                            <li><a href='#'>Phrase-4</a></li>
                        </ul>
                    </div>
                  
                  
                  </li>
                  <li className='Navbar-li'><a href='#'>Aktuelles</a></li>
                  <li className='Navbar-li'><a href='#'>Standort</a></li>
                  <li className='Navbar-li'><a href='#'>Branchen</a></li>
                  <li className='Navbar-li'><a href='#'>Zukunft</a></li>
                  <li className='Navbar-li'><a href='#'>Adressen</a></li>
                  <li className='Navbar-li'><a href='#'>Events</a></li>
                  <li className='Navbar-li'><a href='#'>Kontakt</a></li>
                  <li className='Navbar-li'><a href='#'>Presse</a></li>
                  <li className='Navbar-li'><a href='#'>Partner</a></li>

              </ul>
           </nav>
         </div>
        </>
    )
}

export default Navbar2
