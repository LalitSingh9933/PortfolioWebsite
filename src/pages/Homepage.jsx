import React from 'react'
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Project from '../components/Project'
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Homepage() {
  return (

    <div className=' bg-[#f1ede7] dark:bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden'>
      {/* Full-page watermark */}

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="text-[15vw] font-bold text-gray-400 dark:text-gray-700 select-none"
        >
          LALIT SINGH
        </motion.h1>
      </div>


    </div>
  )
}
