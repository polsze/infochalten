import React, { useState, useEffect } from 'react';
import ImgLink from '../assets/img/link.png';
import ImgLink2 from '../assets/img/link2.png';
import ImgLinkSmall from '../assets/img/linksmall.png';
import ImgLinkSmall2 from '../assets/img/appicon.png';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useIdioma } from './IdiomaContext';
import VisibilitySensor from 'react-visibility-sensor';


const Install = () => {
  const { idiomaActual } = useIdioma();

  const textos = {
    'es': {
      'titulo': 'Como instalar la App en tu dispositivo móvil',
      'paso1': ' Abre la aplicación en Google Chrome utilizando el enlace proporcionado a continuación',
      'paso2': ' En pantallas pequeñas, toca en el "Menú desplegable"',
      'paso3': ' Luego haz clic en la opción "Instalar Aplicación"',
      'paso4': ' Al completar la descarga, podrás agregar un acceso directo a la pantalla de inicio para acceder fácilmente a nuestra aplicación',
    },
    'en': {
      'titulo': 'How to install the App on your mobile device',
      'paso1': ' Open the application in Google Chrome using the link provided below',
      'paso2': ' On small screens, tap on the "Dropdown Menu"',
      'paso3': ' Then click on the "Install Application" option',
      'paso4': ' Upon completion of the download, you can add a shortcut to the home screen for easy access to our application',
    },
  };

  const sentence = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };


  return (
    <>
      <div className='p-2 flex items-center '>
        <div className='border border-orange-500 w-full '></div>
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>

          <motion.h2 className='text-center font-oswald text-5xl font-bold my-10 sm:text-3xl' 
            variants={sentence}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {textos[idiomaActual].titulo.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </VisibilitySensor>
        <div className='border border-orange-500 w-full mx-2'></div>
      </div>

      <div className="grid grid-cols-2 gap-2 px-2 font-roboto sm:flex sm:flex-col">

        <div className="col-span-1 row-span-1 bg-gray-100 p-4 flex flex-col items-center justify-evenly">
          <p className='mb-4 text-2xl text-left sm:text-lg' ><b>1.</b> {textos[idiomaActual].paso1}</p>
          <a href="https://infochalten.glide.page/" target='_blank'>
            <img src={ImgLink} alt="" />
          </a>
        </div>

        <div className="col-span-1 row-span-1 bg-gray-100 p-4 flex items-center justify-evenly ">
          <div className='flex flex-row items-center md:flex-col sm:flex-col'>
            <p className='text-2xl text-left sm:text-lg' ><b>2.</b> {textos[idiomaActual].paso2}</p>
            <img src={ImgLinkSmall} alt="" className='ml-4 sm:mt-4' />
            <Icon icon="zondicons:arrow-thin-left" className='ml-1 mt-1 md:hidden sm:relative sm:left-40 sm:bottom-8 ' color='#F56903' width='22' />
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-gray-100 p-4 flex items-center justify-evenly">
          <div className='flex flex-col items-center justify-start sm:flex-col'>
            <p className='text-2xl text-left sm:text-lg' ><b>3.</b> {textos[idiomaActual].paso3}</p>
            <img src={ImgLink2} alt="" className='ml-4 rounded-xl' />
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-gray-100 p-4 flex items-center justify-evenly">
          <div className='flex flex-col items-center sm:flex-col'>
            <p className='text-2xl text-left sm:text-lg' ><b>4.</b> {textos[idiomaActual].paso4}</p>
            <img src={ImgLinkSmall2} alt="" className='ml-4 rounded-xl' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Install;
