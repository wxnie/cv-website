import PageButton from "./PageButton"
import Github from '../assets/img/github.svg'

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-5 d-flex flex-column align-items-center">
            <h2 className="contact__header">Say <span>Hello!</span></h2>
            <p className="contact__intro">I&apos;m looking for new opportunities, so my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!</p>
            <div className="contact__buttons d-flex justify-content-center align-items-center">
              <PageButton text="Get in touch!" link="mailto:w.xniezborala@gmail.com"/>
              <a className="contact__button" target="_blank" rel="noreferrer" href="https://github.com/wxnie/cv-website">
                <img className="contact__icon" src={Github} alt="github"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact