import { useState } from "react"
import ExperienceContent from "./ExperienceContent"

function Experience() {
  const ExperienceData = [
    {
      id: 1, 
      company: "Follow&nbsp;Vision", 
      title: "Web Developer",
      tasks: [
        'Creating and expanding websites based on WordPress using PHP, JS, and SCSS',
        'Managing their content with CMS and ACF plugin',
        'Adding multiple languages versions with WPML',
        'In some cases, using Vue.js and GraphQL instead of the traditional approach'
      ]
    },
    {
      id: 2, 
      company: "Sun&nbsp;Group", 
      title: "Junior Front-end developer",
      tasks: [
        'Expanding MediaExpert e-shop with PHP, JS, and CSS',
        'Product database updates using MySql',
        'Creating fully responsive landing pages for products and promotions',
        'Fixing possible problems appearing on the website'
      ]
    },
    {
      id: 3, 
      company: "STX&nbsp;Next", 
      title: "Junior JavaScript Developer",
      tasks: [
        'Building website UI using React.js and Styled Components',
        'Changing existing websites looks appropriately to new projects',
        'Creating Android mobile app interfaces using Ract Native',
        'Daily meeting with the client for updates on the workflow'
      ]
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const [content, setContent] = useState(<ExperienceContent contentData={ExperienceData[0]}/>)

  const handleClick = (info, num) => () => {
    setActiveIndex(num)
    setContent(<ExperienceContent contentData={info}/>)
  }

  return (
    <div className="experience d-md-flex">
      <div className="experience__bar">
        <ul className="experience__bar-list d-flex flex-md-column justify-content-between">
          {ExperienceData.map((Job, index) => {
            const ClassMod = activeIndex === index ? 'active' : 'default'
            return <li key={Job.id} onClick={handleClick(Job, index)} className={`experience__bar-item experience__bar-item--${ClassMod} d-flex align-items-center justify-content-center justify-content-md-start`} dangerouslySetInnerHTML={{ __html: Job.company }}></li>
          })}
        </ul>
      </div>
      {content}
    </div>
  )
}

export default Experience