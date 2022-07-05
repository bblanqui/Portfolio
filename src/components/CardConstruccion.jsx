import React from 'react'
export const CardConstruccion = () => {
  return (
    <div className='home-casestudies'>
 <span className='outline-title'>Estudios Y Proyectos</span>
     <section className="project project-0">
        <a href="https://dribbble.com/shots/17693170--Elao-development-agency" target="_blank">
          <div className="badge-new">Construccion</div>
          <div className="project-img">
            <img alt="thumb project elao website" src="img/thumb-elao-website.png" />
          </div>
          <div className="project-desc">
            <span className="project-number">01</span>
            <span className="project-arrow" /> 
            <span className="project-hover">
              <span className="project-client">Elao</span>
              <span className="project-view">View project</span>
            </span>
            <h3>Designing Elao's Website Around his New Identity</h3>
            <p>I've collaborated with Elao, a development agency, to design their new website based on their upcoming brand new identity</p>
          </div>
        </a>
      </section>
    
    </div>
  )
}
