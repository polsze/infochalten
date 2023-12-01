import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import { useIdioma } from './IdiomaContext';

const Hero = () => {

  const { idiomaActual, cambiarIdioma } = useIdioma();

  const textos = {
    'es': {
      'titulo': 'Bienvenidos a la APP de InfoChaltén',
      'subtitulo': 'Encontrá toda la información necesaria para que tu estadía en El Chaltén sea sumamente agradable',
      'textButton': 'Ir a la APP',
    },
    'en': {
      'titulo': 'Welcome to the InfoChaltén App',
      'subtitulo': 'Find all the necessary information to make your stay in El Chaltén extremely enjoyable',
      'textButton': 'Go to the App',
    }
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

  const sentenceSub = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.02,
      },
    },
  };

  const sentenceBtn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.15,
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
    <div className="w-full h-screen bg-heroBg flex flex-col items-center justify-center bg-center bg-cover">
      <div className="mt-96 text-center xxl:mt-24 xl:mt-8 sm:mt-0">
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
          {({ isVisible }) => (
            <motion.h1
              className="font-oswald text-6xl font-bold text-white sm:text-4xl xs:text-2xl"
              variants={sentence}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {textos[idiomaActual].titulo.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          )}
        </VisibilitySensor>
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
          {({ isVisible }) => (
            <motion.p
              className="font-oswald text-3xl font-semibold mb-2 text-white xxl:my-4 sm:my-6 sm:text-2xl sm:px-2 xs:text-xl xs:px-1"
              variants={sentenceSub}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {textos[idiomaActual].subtitulo.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          )}
        </VisibilitySensor>

        <a href="https://infochalten.glide.page/" target='_blank' className="border bg-gradient-to-b from-orange-500 to-yellow-300 flex items-center justify-center w-48 h-20 rounded-2xl font-oswald uppercase font-semibold text-3xl text-center m-auto mb-2 sm:text-2xl">
          <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            {({ isVisible }) => (
              <motion.p variants={sentenceBtn} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
                {textos[idiomaActual].textButton.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            )}
          </VisibilitySensor>
        </a>
      </div>
    </div>
  );
};

export default Hero;
