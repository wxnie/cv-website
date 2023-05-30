import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className='app'>
      <Header/>
      <main className='app__main'>
        <Banner/>
        <Work/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App