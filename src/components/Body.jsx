import React from 'react'
import { CardConstruccion } from './CardConstruccion'
import { Cards } from './Cards'
import Tilt from 'react-parallax-tilt';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, Toaster  } from 'react-hot-toast';
export const Body = () => {


  return (

       
  <Tilt className="parallax-effect-glare-scale"
  tiltMaxAngleX={9}
  tiltMaxAngleY={9}
  perspective={10000000}
  transitionSpeed={10000}
  scale={1.03}
  gyroscope={true}

  >
    <div  className="intro">
        <p class="tag">
                Soy Brallan Mosquera<svg width="40px" height="1"><path fill-rule="evenodd" d="M0 0h66v4H0z"/></svg> Disponible para trabajo freelance
            </p>
            <h1>          
        Soy <span className="margin-freelance">Desarrollador backend </span>
        <svg width={90} height={68} xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#f5234c" d="M5.303 28.672L9.16 18.384 77.742 0 90 45.762 7.038 68 0 41.726z" /><text transform="rotate(-15 47.263 34.018)" fontFamily="Averta-Bold, Averta" fontSize={18} fontWeight="bold" fill="#FFFF"><tspan x="13.263" y="40.518">Go/React</tspan></text><path fill="#C26A8B" d="M20 25.54L0 42l8.615-23z" /></g></svg>
        <span className="margin-designer"> Estudiante</span><br /> De ingeniería
      </h1>
      <div className="anim">
        <div className="shape" />
        <div className="paperplane">
          <svg width={461} height={158} viewBox="0 0 462 158" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="#000" className="morph" points="460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727" />
            <polygon fill="#F3F2F4" className="morph2" points="112.758683 38.9677241 184.146186 0 460.677372 157.296036" />
            <polygon fill="#F3F2F4" className="morph3" points="78.250435 57.8044647 460.677372 157.296036 0 100.518402" />
          </svg>             
        </div>
      </div> 
      <div className="intro-content">
        <p className="text">Ayudo a empresas a getionar y visualizar sus datos de manera inteligente mediante herramienta de inteligencia de negocios.
        tengo conocimeiento tecnico en sql, go, react, c# y js.</p>
        <div className="contact">
          <div className="icon">
            <svg width={16} height={11} xmlns="http://www.w3.org/2000/svg"><path d="M.254 10.188H15.12V.438H.254v9.75zm2.403-8.635h10.075L7.72 4.923l-5.062-3.37zm-1.287.484l6.352 4.228 6.283-4.222v7.03H1.37V2.037z" fill="#FFFFFF" fillRule="evenodd" /></svg>
          </div>
        
          <CopyToClipboard text='brianblanquiceth@gmail.com'>

              <span onClick={()=>{toast('correo copiado 😍', {position: "top-center", style: {
      minWidth: '200px',
      marginTop: '50%',
   
       
    } })}} className="mail" data-status="Click para copiar">brianblanquiceth@gmail.com</span>
              

          </CopyToClipboard>
         
        </div>
      </div>
     
     <CardConstruccion />
     <Cards/>
     <Toaster containerStyle={{ position: 'absolute' }}/>    
      </div>
      
      </Tilt>
    
  )
}
