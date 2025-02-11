import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills'
import { Work } from '../components/sections/Work'

function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default Home
