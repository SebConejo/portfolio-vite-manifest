import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills'
import { Work } from './components/sections/Work'

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
