import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'
import { Resume } from './pages/Resume'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
