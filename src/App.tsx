import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'
import { Resume } from './pages/Resume'

export default function App() {
  // The homepage uses a wider layout; keep the nav and footer aligned with it.
  const wide = useLocation().pathname === '/'
  return (
    <>
      <Nav wide={wide} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer wide={wide} />
    </>
  )
}
