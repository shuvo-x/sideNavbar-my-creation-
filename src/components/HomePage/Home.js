import React from 'react';
import './Home.css';


function Home() {
    return (
       <>
       
       
       <div className='HomeBgPage'>
       <div className=" d-flex justify-content-center align-items-center"id='div-images'>
          <div className='row'id='home-row'>
              <div className='col-md-12 text-center'id='home-1st-column'>
                  <h1>React</h1>
                  <p>A JavaScript library for building user interfaces</p>
              </div>
              <div className='col-md-6 mt-5'id='home-2nd-column'>
                 <button className='btn btn-primary'id='home-button'>Get Started</button>
                 <span id='some_id'>Take the Tutorial</span>
              </div>
              
          </div>
       </div>




       </div>
       
       
       </>
    )
}

export default Home
