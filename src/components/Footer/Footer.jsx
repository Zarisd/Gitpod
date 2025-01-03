import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer__text">
                <div className="text">
                    <h4>Gitpod</h4>
                    <p>Home</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p> Changelog</p>
                    <p>Self-Hosted</p>
                    <p>Gitpod vs GitHub</p>
                    <p>Codespaces</p>
                    <p>Status</p>
                </div>

                <div className="text">
                    <h4>Developer</h4>
                    <p>Getting started</p>
                    <p>Screencasts</p>
                    <p>Blog</p>
                    <p>Documentation</p>
                    <p>Report a bug</p>
                    <p>Community</p>
                    
                
                </div>

                <div className="text">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Contact</p>
                    <p>Media Kit</p>
                </div>

                <div className="text">
                    <h4>Legal</h4>
                    <p>Imprint</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>

                
            </div>
            <div className="footer__img">
                
            </div>
        </div>
   <img src="/Logo.svg" alt="" />
    </>
  )
}

export default Footer