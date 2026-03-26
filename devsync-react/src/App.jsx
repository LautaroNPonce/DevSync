import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('login')

  const openModal = (tab) => {
    setActiveTab(tab)
    setModalOpen(true)
  }

  const closeModal = () => setModalOpen(false)

  // Escape key closes modal
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    reveals.forEach(r => obs.observe(r))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar openModal={openModal} />
      <Hero openModal={openModal} />
      <Features />
      <HowItWorks />
      <Pricing openModal={openModal} />
      <CTA openModal={openModal} />
      <Footer />
      <Modal
        isOpen={modalOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        closeModal={closeModal}
      />
    </>
  )
}

export default App
