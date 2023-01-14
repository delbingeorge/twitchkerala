import './App.css'
import About from './assets/About/About'
import Footer from './assets/Footer/Footer'
import Hero from './assets/Hero/Hero'
import Live from './assets/Live/Live'
import Nav from './assets/Nav/Nav'
import Offline from './assets/Offline/Offline'

function App() {

  return (
    <div className="font-poppy">
      <Nav />
      <Hero />
      <About />
      <Live />
      <Offline />
      <Footer />
    </div>
  )
}

export default App
