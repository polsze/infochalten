import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import { useIdioma } from './IdiomaContext'; // Asegúrate de importar el contexto adecuado

export const About = () => {
  const { idiomaActual, cambiarIdioma } = useIdioma();

  const titulos = {
    'es': 'Sobre Nosotros',
    'en': 'About Us',
  };

  const contenido = {
    'es': 'Este proyecto nace en redes sociales, en un pueblo pequeño donde las personas que precisaban comprar algún producto en particular o contratar servicios no disponían de información centralizada y ordenada, y siempre había que estar preguntando ¿quién hace esto? ¿quién vende aquello? A esto se le sumó por interés personal y el de tantas más, la oferta de comida para llevar. Hoy no cocino! Y, de repente, me encontré con que estos intereses de la comunidad también podían ser de interés para el turismo que nos visita cada año. De esta manera comencé a ampliar la base de datos, llegando a lo que hoy es InfoChalten, una plataforma que brinde toda la información disponible y conecte a productores, artistas, comercios, prestadores de servicios, etc. Todo en un solo lugar y totalmente gratis.',
    'en': 'This project was born on social media, in a small town where people who needed to buy a particular product or hire services did not have centralized and organized information, and you always had to be asking who does this? who sells that? To this was added, for personal interest and that of many more, the offer of take-out food. Today I don\'t cook! And suddenly, I found that these community interests could also be of interest to the tourism that visits us every year. In this way, I began to expand the database, reaching what is now InfoChalten, a platform that provides all available information and connects producers, artists, businesses, service providers, etc. All in one place and totally free.',
  };

  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.09,
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

  useEffect(() => {
    setIsVisible(false); 
  }, [idiomaActual]);

  return (
    <>
      <div className='w-full h-auto mt-8 bg-aboutBg2 lg:bg-none'>
        <motion.div className='flex m-auto w-[60%] h-4/5 bg-gray-100 shadow-2xl shadow-orange-500 rounded-xl xl:w-[70%] lg:w-[90%] sm:w-[96%]'>
          <div className='flex flex-col items-center font-oswald text-center'>
            <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
              <motion.h3
                className='text-5xl my-16 uppercase font-bold'
                variants={sentence}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {titulos[idiomaActual].split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.h3>
            </VisibilitySensor>
            <div className='h-4 w-full border-8 mb-16 flex items-center justify-center'>
              <Icon icon="mdi:about" width="124" className='' />
            </div>
            
              <p
                className='text-2xl w-3/4 mb-16'
                
              >
                {contenido[idiomaActual]}
              </p>
            
          </div>
        </motion.div>
      </div>
    </>
  );
};
