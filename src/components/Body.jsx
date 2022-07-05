import React from 'react'
import { CardConstruccion } from './CardConstruccion'
import { Cards } from './Cards'

export const Body = () => {
  return (
    <div  className="intro">
        <p class="tag">
                I'm Adrien Gervaix<svg width="40px" height="1"><path fill-rule="evenodd" d="M0 0h66v4H0z"/></svg> Available For Freelance Work
            </p>
            <h1>          
        I'm <span className="margin-freelance">Freelance</span>
        <svg width={90} height={68} xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#EEA1BE" d="M5.303 28.672L9.16 18.384 77.742 0 90 45.762 7.038 68 0 41.726z" /><text transform="rotate(-15 47.263 34.018)" fontFamily="Averta-Bold, Averta" fontSize={18} fontWeight="bold" fill="#18033C"><tspan x="13.263" y="40.518">UI / UX</tspan></text><path fill="#C26A8B" d="M20 25.54L0 42l8.615-23z" /></g></svg>
        <span className="margin-designer">Designer</span><br /> Turning Your Paperball Into Paperplane
      </h1>
      <div className="anim">
        <div className="shape" />
        <div className="paperplane">
          <svg width={461} height={158} viewBox="0 0 462 158" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="#CE7A9A" className="morph" points="460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727" />
            <polygon fill="#F3F2F4" className="morph2" points="112.758683 38.9677241 184.146186 0 460.677372 157.296036" />
            <polygon fill="#F3F2F4" className="morph3" points="78.250435 57.8044647 460.677372 157.296036 0 100.518402" />
          </svg>             
        </div>
      </div> 
      <div className="intro-content">
        <p className="text">I help companies to design digital products and turn ideas into a functional and delightful experience. I’m focusing on working on interface and digital design – mainly building products, branding and websites.</p>
        <div className="contact">
          <div className="icon">
            <svg width={16} height={11} xmlns="http://www.w3.org/2000/svg"><path d="M.254 10.188H15.12V.438H.254v9.75zm2.403-8.635h10.075L7.72 4.923l-5.062-3.37zm-1.287.484l6.352 4.228 6.283-4.222v7.03H1.37V2.037z" fill="#FFFFFF" fillRule="evenodd" /></svg>
          </div>
          <span className="mail" data-status="Click to Copy!">hello@adriengervaix.com</span>
        </div>
      </div>
     
     <CardConstruccion />
     <Cards/>
            
      </div>
  )
}
