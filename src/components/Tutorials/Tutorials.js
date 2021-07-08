import React from 'react';
import './Tutorials.css';

function Tutorials() {
   var x = document.getElementById('demo');
  
   





    return (
       <>
       
       <div className='TutorialsBg'>
           <div className='container'>
              <div className='row'id='TutorialsRow'>
              <div className='col-md-4'id='TutorialsCol'>
                  <h3>A Simple Component</h3>
                  <p>React components implement a render() method that
                       takes input data and returns what to display. 
                       This example uses an XML-like syntax called JSX. 
                       Input data that is passed into the component can 
                       be accessed by render() via this.props.<br/><br/><br/>
                       JSX is optional and not required to use React.
                     Try the Babel REPL to see the raw JavaScript
                      code produced by the JSX compilation step      
                       </p>
              </div>
            
                 
             
              <div className='col-md-6'id='BgDiv'>
                  <div id='demo'></div>
                
              </div>
              </div>
           </div>
       </div>
       
       
       
       </>
    )
}

export default Tutorials
