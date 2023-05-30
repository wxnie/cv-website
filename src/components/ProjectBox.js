function ProjectBox({projectInfo}) {
  let classes = {}

  if(projectInfo.id % 2 === 0) {
    classes = {
      currentDirection: 'row-reverse',
      currentJustify: 'start',
      currentMod: 'left'
    }
  } else {
    classes = {
      currentDirection: 'row',
      currentJustify: 'end',
      currentMod: 'right'
    }
  }

  return (
    <div className="col-md-10 col-lg-12 col-xl-10">
      <div className={`project-box project-box--${classes.currentMod} d-lg-flex flex-${classes.currentDirection} align-items-center`}>
        <div className="project-box__img-wrap">
          <img className="project-box__img" src={projectInfo.img} alt={projectInfo.title}/>
        </div>
        <div className={`project-box__content d-lg-flex flex-column align-items-${classes.currentJustify}`}>
          <h3 className="project-box__title">{projectInfo.title}</h3>
          <p className="project-box__desc">{projectInfo.description}</p>
          <a href={projectInfo.link} className="project-box__link" target="_blank" rel="noreferrer">Live website</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox