import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import EducationProgram from './pages/EducationProgram'
import OurSignature from './pages/OurSignature'
import Academics from './pages/Academics'
import PreviousAcademics from './pages/PreviousAcademics'
import CoCurricular from './pages/CoCurricular'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  useEffect(() => {
    // List of core images used as main headers on your inner sub-pages
    const criticalInnerPagesImages = [
      '/images/mainimagerefined.webp',       
      '/images/chess.webp',                  
      '/images/ballet.webp',                  
      '/images/kindergatenpresentation.webp',
      '/images/pp2grad.webp',             
      '/images/logo.webp'                   
    ]


    criticalInnerPagesImages.forEach((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/education-program" element={<EducationProgram />} />
        <Route path="/our-signature" element={<OurSignature />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/previous-academics" element={<PreviousAcademics />} />
        <Route path="/co-curricular" element={<CoCurricular />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
