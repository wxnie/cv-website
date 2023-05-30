import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Work from './components/Work'

function App() {
  return (
    <div className='app'>
      <Header/>
      <main className='app__main'>
        <Banner/>
        <Work/>
      </main>
      <Footer/>
    </div>
  )
}

export default App