import React from 'react'

export const Cards = () => {
  return (

    <section className="project project-1">
    <div className="intro-casestudies">
      <span className="intro-title">
        Reworking an&nbsp;Elearning platform
        <div className="badge">
          <div className="text-default">Staff<br />Pick</div>
          <div className="text-hover"> Of Course There Is No Staff</div>
        </div>
      </span>
    </div>
    <a href="casestudies/msc-interface.html">
      <div className="project-img">
        <img alt="thumb project msc interface" src="img/thumb-msc-interface.png" />
      </div>
      <div className="project-desc">
        <span className="project-number">02</span>
        <span className="project-arrow" /> 
        <span className="project-hover">
          <span className="project-client">MySkillCamp</span>
          <span className="project-view">View project</span>
        </span>
        <h3>Redesigning The Experience Of An Elearning Platform</h3>
        <p>I collaborated with MySkillCamp to rebuild their eLearning platform. This case study explains what the process was, from the user experience to the design system.</p>
      </div>
    </a>
  </section>


  )
}
