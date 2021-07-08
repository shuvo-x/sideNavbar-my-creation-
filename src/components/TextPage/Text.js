import React from 'react';
import './Text.css';

function Text() {
    return (
       <>
       
       <div className='textBg'>
           <div className='container'>
               <div className='row'id='text-row'>
                   <div className='col-md-4'id='paraId'>
                       <h4>Declarative</h4>
                       <p className='paraline'>React makes it painless to create interactive UIs.
                            Design simple views for each state in your application, 
                            and React will efficiently update and render just 
                            the right components<br/> when your data changes.<br/><br/>
                            Declarative views make your code more
                             predictable and easier to debug.
                       </p>
                   </div>
                   <div className='col-md-4'id='paraId'>
                       <h4>Component-Based</h4>
                       <p className='paraline'>Build encapsulated components that manage their own state, 
                           then compose them <br/>to make complex UIs.<br/><br/>Since component logic is
                         written in<br/> JavaScript instead of templates, you can easily pass 
                         rich data through your app and keep state out of the DOM.</p>
                   </div>
                   <div className='col-md-4'id='paraId'>
                       <h4>Learn Once, Write Anywhere</h4>
                       <p className='paraline'>We don’t make assumptions about the rest of your technology stack, 
                        so you can develop new features in React without rewriting existing code.<br/><br/>
                        React can also render on the server using Node and power mobile apps using React Native.
                        </p>
                   </div>
               </div>
           </div>
       </div>
         
       </>
    )
}

export default Text
