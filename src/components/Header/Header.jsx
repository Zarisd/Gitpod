

import React from 'react'
import './Header.css' 


const Header = () => {
  return (
     <>
     <div className="header">
      <div className="container">
         <div className="wraper">


         <div className='img'>
            <img src="/Logo.svg" alt="" />

            <h1>Gitpod</h1>
         </div>




         <nav className='nav'>
            <a href=""> Features</a>
            <a href=""> Pricing</a>
            <a href=""> Blog</a>
            <a href=""> Docs</a>
            <a href=""> Changelog</a>
            <a href=""> We're hiring</a>
         </nav>

         <button className='btn'>Login</button>
         </div>
      </div>
     </div>
     
     
     </>
  )
}

export default Header