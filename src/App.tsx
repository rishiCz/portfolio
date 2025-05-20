import { motion } from 'framer-motion'
import './App.css'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Head from './components/sections/Head'
import Projects from './components/sections/Projects'
import SideTab from './components/SideTab'
import ThemeButton from './components/ThemeButton'
import ConnectModal from './components/ConnectModal'
import arrowsvg from './assets/arrow-dashed-svgrepo-com.svg'
import { useEffect, useState } from 'react'

function App() {
  const [showResumeIndicator, setShowResumeIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowResumeIndicator(window.scrollY <= 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <ConnectModal />
      <div>
        <div className='fixed top-3 left-3 z-20'>
          <ThemeButton />
        </div>

        {/* SideTab and Resume Indicator (hover on parent) */}
        <motion.div
          animate="visible"
          whileHover="hovered"
          transition={{ delay: 1, duration: 1 }}
          className='fixed flex gap-5 top-[50%] -translate-y-[50%] z-20 ms-5 max-lg:hidden'
          variants={{
            visible: { top: ['-50%','-50%','55%','50%'], opacity: [0,0,0,1] },
          }}
        >
          <SideTab />

          {/* Resume indicator responds to parent hover */}
          <motion.div
            variants={{
              visible: { opacity: showResumeIndicator ? 0.6 : 0 },
              hovered: { opacity: 0 }
            }}
            transition={{ duration: 1 }}
            className='transition-opacity self-end max-lg:hidden'
          >
            <p className='self-end -mb-2 font-mono'>Download Resume</p>
            <img src={arrowsvg} className='w-10 rotate-180 dark:invert -mb-2 -translate-x-2' />
          </motion.div>
        </motion.div>

        {/* Mobile SideTab */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 1, duration: 1 }}
          className='fixed top-5 right-5 z-20 ms-5 lg:hidden'
        >
          <SideTab />
        </motion.div>

        <div className='p-3'>
          <Head />
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  )
}

export default App
