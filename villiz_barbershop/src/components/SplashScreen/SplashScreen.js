import React from 'react'
import {motion} from "framer-motion"

export default function SplashScreen() {
  return (
    <div className='absolute top-0 z-10 w-full h-screen flex'>
        <motion.div className='w-1/2 h-full bg-slate-400'
        initial={{x: 0}} 
        animate={{x: -1000}}
        transition={{delay: 1.5, duration: 1, type: "spring", stiffness:120}}
        />
        <motion.div className='w-1/2 h-full bg-orange-600' 
        initial={{x: 0}} 
        animate={{x: 1000}}
        transition={{delay: 1.5, duration: 1, type: "spring", stiffness:120}}
        />
    </div>
  )
}
