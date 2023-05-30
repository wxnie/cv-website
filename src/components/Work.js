import Experience from "./Experience"
import SkillBox from "./SkillBox"

function Work() {
  const TechStack = ['HTML', 'Vue.js', 'SCSS', 'HTML', 'SQL', 'Bootstrap', 'WordPress', 'React.js', 'React Native']

  return (
    <section className="work">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-7">
            <h2 className="work__header">Where I’ve <span>worked</span></h2>
            <p className="work__intro">Here you can find a piece of information about my commercial experience and get to know exactly what I did. You can also check out my tech stack.</p>
            <Experience/>
            <div className="work__skills d-flex justify-content-center  flex-wrap">
              {TechStack.map((technology, index) => {
                return <SkillBox key={index} techName={technology}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
