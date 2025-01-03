import React from 'react'
import './Cd.css' 

const Cd = () => {
  return (
  <>
<section className="Cd">
    <div className="container">
        <div className="Cd__wrapper">
            <div className="Cd__box">

            <div className="cd1">
                <h2>Think CI/CD for dev environments</h2>
                
                 <p> We invented prebuilds so application code, configuration and <br />
                  infrastructure can all be stored as machine-executable code <br />
                  in your git repositories and applied to dev environments <br /> automatically and continuously.</p>

            </div>
           
           
            <div className="cd2">
                <button className='btn-3'>More on prebuilds</button>
                <button className='btn-2'>Documentation</button>
            </div>
        </div>

        <div className="cdImage">
            <img src="/cd.png" alt="" />
        </div>
            </div>
    </div>
</section>
  </>
  )
}

export default Cd