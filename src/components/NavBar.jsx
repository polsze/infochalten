import React, { useState } from 'react'
import Logo from '../assets/img/logo-infochalten.avif'
import { motion } from "framer-motion"
import { Icon } from '@iconify/react';
import { useIdioma } from './IdiomaContext';




const NavBar = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -350 },
  }

  const { idiomaActual, cambiarIdioma } = useIdioma();



  const textos = {
    'es': {
      'navItem': 'Nuestra App',
      'navItem2': 'Sobre Nosotros',
      'navItem3': 'Contacto',
    },
    'en': {
      'navItem': 'Our App',
      'navItem2': 'About Us',
      'navItem3': 'Contact',
    }
  }

  return (
    <>
      <div className='w-full h-auto absolute flex flex-row items-center justify-around bg-transparent'>
        <motion.div
          animate={{
            scale: [0.5, 1, 1, 0.5, 1],
            rotate: [0, 0, 180, 0, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],

          }}
          className='sm:m-auto'
        >
          <img src={Logo} className=' xxl:w-32 xxl:ml-20 xl:ml-4 lg:ml-4 sm:ml-0' />
        </motion.div>

        <div className='sm:hidden'>
          <nav className='w-full'>
            <motion.ul className='flex flex-row text-white text-2xl' initial="hidden" animate="visible" variants={list}>
              {Object.keys(textos[idiomaActual]).map((key) => (
                <motion.li
                  key={key}
                  className={`mr-12 font-oswald font-extrabold uppercase ${key === 'navItem3' ? 'xxl' : 'lg'}:whitespace-nowrap lg:mr-8`}
                  variants={item}
                >
                  {textos[idiomaActual][key]}
                </motion.li>
              ))}
            </motion.ul>

          </nav>
        </div>


        <motion.div className='flex flex-row items-center sm:pr-16 xs:pr-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <button
            className="flex items-center bg-transparent text-gray-800 rounded mr-4 lg:mr-2 sm:mr-8 xs:mr-4"
            onClick={() => cambiarIdioma('es')}>
            <Icon icon="twemoji:flag-spain" width='25' />
          </button>
          <button
            className="flex items-center bg-transparent text-gray-800 rounded"
            onClick={() => cambiarIdioma('en')}>
            <Icon icon="twemoji:flag-united-states" width='25' />

          </button>
        </motion.div>
      </div>
    </>
  )
}

export default NavBar