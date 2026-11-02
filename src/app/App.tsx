import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'

import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Preloader } from './components/Preloader'
import { About } from './pages/About'
import { Cv } from './pages/Cv'
import { Home } from './pages/Home'
import { NoteChapter } from './pages/NoteChapter'
import { Notes } from './pages/Notes'
import { Work } from './pages/Work'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 50)
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="cv" element={<Cv />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:slug" element={<NoteChapter />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <ScrollManager />
      <Nav />
      <Pages />
      <Footer />
    </BrowserRouter>
  )
}
