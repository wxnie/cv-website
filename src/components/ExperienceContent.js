function ExperienceContent({contentData}) {
  return (
    <div key={contentData.id} className="experience-content">
      <h3 className="experience-content__header">{contentData.title} <span>@&nbsp;{contentData.company}</span></h3>
      <div className="experience-content__desc">
        <ul className="experience-content__desc-list">
          {contentData.tasks.map((task, index) => {
            return  <li key={index} className="experience-content__desc-item">{task}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceContent