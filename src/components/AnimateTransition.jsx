/* "use client" */
import RootLayout from '@/app/layout'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'

export const AnimateTransition = ({Component, pageProps}) => {
    const router=useRouter()
  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className="h-full">
        <Transition/>
      <Component {...pageProps}/>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
