
import { motion } from 'framer-motion'
import './App.css'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
// import Footer from './components/sections/Footer'
import Head from './components/sections/Head'
import Projects from './components/sections/Projects'
import SideTab from './components/SideTab'
import ThemeButton from './components/ThemeButton'
import ConnectModal from './components/ConnectModal'


function App() {


  return (
    <>
      <ConnectModal/>
      <div className=''>
        <div className='fixed top-3 left-3 z-20'>
          <ThemeButton />
        </div>
        <motion.div animate={{ top: ['-50%', '60%', '50%'], opacity: ['0%', '100%'] }} transition={{ delay: 1, duration: 1 }}
          className='fixed top-[50%] -translate-y-[50%] z-20 ms-5 max-lg:hidden'>
          <SideTab />
        </motion.div>

        <motion.div animate={{  opacity: ['0%', '100%'] }} transition={{ delay: 1, duration: 1 }}
          className='fixed top-5 right-5 z-20 ms-5 lg:hidden'>
          <SideTab />
        </motion.div>
        <div className='p-3'>


          <Head />
          <About />
          <Experience />
          <Projects />

        </div>
        {/* <Footer /> */}



      </div>
    </>
  )
}

export default App
