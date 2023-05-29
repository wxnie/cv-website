import hero from '../assets/img/hero.svg'
import PageButton from './PageButton'

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
            <div className="banner__img-wrap">
              <img src={hero} className="banner__img" alt="hero img"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner__content d-flex flex-column align-items-center align-items-md-start">
              <p className="banner__intro">Hello, my name is <span>Wiktoria</span></p>
              <h1 className="banner__header">Front-end developer. Turning design in to real&nbsp;life websites.</h1>
              <PageButton link="#contact" text="Contact"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner