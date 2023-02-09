import React from 'react'
import {motion} from "framer-motion"

export default function SplashScreen() {
  return (
    <div className='absolute top-0 z-10 w-full h-screen flex overflow-hidden'>
        <motion.div className='w-1/2 h-full bg-gray-50 flex items-center justify-end'
        initial={{x: 0}} 
        animate={{x: -1000}}
        transition={{delay: 0.5, type: "tween", duration: 1.5}}
        >
          <img src="open1.png" alt='logo1' className='w-64'/>
        </motion.div>
        <motion.div className='w-1/2 h-full bg-gray-50 flex items-center justify-start' 
        initial={{x: 0}} 
        animate={{x: 1000}}
        transition={{delay: 0.5, type: "tween", duration: 1.5}}
        >
          <img src="open2.png" alt='logo1' className='w-64'/>
        </motion.div>
    </div>
  )
}
