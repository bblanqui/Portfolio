import React from 'react'
import Tilt from 'react-parallax-tilt';
export const Cards = () => {
  return (

    
  <Tilt className="parallax-effect-glare-scale"
  tiltMaxAngleX={9}
  tiltMaxAngleY={9}
  perspective={10000000}
  transitionSpeed={10000}
  scale={1.03}
  gyroscope={true}
 
  >
    <section className="project project-1">
    <div className="intro-casestudies">
 
      <span className="intro-title">
        Movinova
        <div className="badge">
          <div className="text-default">estado</div>
          <div className="text-hover"> Actualmente</div>
        </div>
      </span>
    </div>
    <a href="casestudies/msc-interface.html">
      <div className="project-img">
        <img alt="thumb project msc interface" src="https://img.freepik.com/foto-gratis/concepto-informacion-presentacion-analisis-datos-empresariales_53876-144422.jpg?w=900&t=st=1671826751~exp=1671827351~hmac=e120979273fad72f7c6f73870525d33e289683ba734608fefe059371e1fc2224" />
      </div>
      <div className="project-desc">
        <span className="project-number">02</span>
        <span className="project-arrow" /> 
        <span className="project-hover">
          <span className="project-client">Analista de datos</span>
          <span className="project-view">Ir a proyecto</span>
        </span>
        <h3>Analista de datos movinova</h3>
        <p>Me desempeño en la parte de analista de datos donde puedo brindar atencion al cliente, añadir funcionalidad nueva a la aplicacion por medio de sql server.</p>
      </div>
    </a>
  

  </section>
 
  </Tilt>
  )
  
}
