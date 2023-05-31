import ProjectBox from './ProjectBox'
import Wento from '../assets/img/Wento.png'
import Kindloteka from '../assets/img/Kindloteka.png'
import Mechanik from '../assets/img/Mechanik.png'

function Projects() {
  const ProjectsData = [
    {
      id: 1,
      img: Wento,
      title: "Wento", 
      description: "In this project, I've been working as part of a team. It is a Website created for a Polish company that operates renewable energy and energy storage projects. This website was built using WordPress, but it has a more modern approach thanks to Vue.js and GraphQl.", 
      link: "https://www.wento.eu/"
    },
    {
      id: 2,
      img: Kindloteka,
      title: "Kindloteka- Skilled explorers", 
      description: "This is one of my favourite projects I worked on. In this case, I mostly worked on my own both on the code side and further content management. This website was built for Amazon's educational program called Skilled Explorers.", 
      link: "https://kindloteka.pl/zdolniodkrywcy/"
    },
    {
      id: 3,
      img: Mechanik,
      title: "Mechanik2", 
      description: "Mechanik2 is a simple, one-page site dedicated to Swiss watch. My role in this project was to create the HTML structure and styling it with SCSS. I also was taking care of multi-lingual features on this one and created some animations.", 
      link: "https://mechanik2.com/"
    },
  ]
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-xl-10">
            <h2 className="projects__header">Some <span>Projects</span> I&apos;ve&nbsp;worked&nbsp;on</h2>
            <p className="projects__intro">Check out some websites I created during my commercial career, some of these were created on my own and others are effects of teamwork.</p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          {ProjectsData.map((Project) => {
            return <ProjectBox key={Project.id} projectInfo={Project}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects