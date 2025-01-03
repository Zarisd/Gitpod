import React from 'react'
import './Remote.css' 

const Remote = () => {
  return (
    <>
    
    <section className="remote">        
        <div className="container">
            <div className="remote__wrapper">
                
                <h1> Remote-first. Secure by design.</h1>
                    <img src="/Remote.png" alt="" />
                <div className="remote__wrapp">
                    <p className='remote__text'>
                    You no longer need an over-powered laptop to code, Gitpod works just as 
                    smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes 
                    all source code and never stores it on insecure machines and networks.
                    </p>
                        <div className="but">
                            <button className='but-1'>
                                <img src="/Frame.png" alt="" />
                                Chrome Extension
                                </button>
                            <button className='but-1'>
                                <img src="/Page.png" alt="" />
                                Firefox Extension
                                </button>

                        </div>
                </div>
            </div>

        </div>

    </section>
    
    </>
  )
}

export default Remote