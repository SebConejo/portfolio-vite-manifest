import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import Home from './pages/Home'
import ProjectDetail from './pages/projectDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
