import React, { useEffect, useRef, useState } from 'react';
import BgApp from '../assets/img/app-infochalten.avif';
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import { useIdioma } from './IdiomaContext';

export const AppSection = () => {
  const { idiomaActual, cambiarIdioma, visibilidad, reiniciarVisibilidad } = useIdioma();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  const ImgRef = useRef();
  const h2Ref = useRef();
  const ulRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= viewportHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (visibilidad) {
      setIsVisible(false);
      reiniciarVisibilidad();
    }
  }, [visibilidad, reiniciarVisibilidad]);

  const tituloSecApp = {
    'es': '¿Por qué y para qué usar la APP de InfoChaltén?',
    'en': 'Why and How to Use the InfoChaltén App?',
  };

  const listaSecApp = {
    'es': [
      'Conocé todo lo que ofrece El Chaltén en materia de HOSPEDAJE: hoteles, glampings, aparts, cabañas, campings, hosteles y más',
      '¿Querés comer algo rico?, InfoChaltén ofrece una sección destinada a la GASTRONOMÍA',
      'Descubrí todo lo relacionado con la principal actividad de El Chaltén: El Trekking',
      '¿Te surgió algún inconveniente?, en nuestra app vas a poder encontrar cualquier tipo de SERVICIO acorde a tu necesidad',
      '¿Tenes ganas de comprarte algo?, en la sección TIENDAS lo tenes todo; Indumentaria, Almacén, Alimentos, Farmacia y más',
      '¿Queres salir y no conoces El Chaltén?, no te preocupes, la sección TRANSPORTES te brindará la ayuda necesaria para tu movilidad',
      'Conocé los eventos y las actividades que ofrece El Chaltén',
    ],
    'en': [
      'Discover all that El Chaltén offers in terms of ACCOMMODATION: hotels, glampings, apartments, cabins, campings, hostels, and more',
      'Do you want to eat something delicious? InfoChaltén offers a section dedicated to GASTRONOMY',
      'Explore everything related to El Chaltén\'s main activity: Trekking',
      'Having any issues? In our app, you can find any kind of SERVICE according to your needs',
      'Do you want to buy something? In the STORES section, you have everything; Clothing, Grocery store, Food, Pharmacy, and more',
      'Want to go out and don\'t know El Chaltén? Don\'t worry, the TRANSPORT section will provide the necessary help for your mobility',
      'Discover the events and activities offered by El Chaltén',
    ],
  };

  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.04,
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

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <>
      <div ref={sectionRef} className="w-full h-auto grid grid-cols-2 p-2 gap-2 lg:flex lg:flex-col-reverse lg:h-4/5">

        <div className="flex flex-col justify-center bg-smartBg bg-cover bg-no-repeat text-white pt-12 lg:bg-center">

          <motion.h2
            ref={h2Ref}
            className="font-oswald text-6xl text-center pl-12 mb-6 xxl:pl-0 xl:pl-0 lg:pl-0 sm:text-3xl"
            variants={sentence}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {tituloSecApp[idiomaActual].split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h2>

          {listaSecApp[idiomaActual].map((text, index) => (
            
                <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                }}
                  className='lg:pt-10'
                >
                  <div className="flex items-center pl-12 xl:pl-2 lg:pl-0  sm:text-ellipsis">
                    <li className="font-oswald mb-2 text-xl xl:pl-0 lg:pl-2">{text}</li>
                  </div>
                </motion.ul>
             
            
          ))}
        </div>

        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
          {({ isVisible }) => (
            <motion.div
              className="bg-smartBg2 bg-cover bg-left bg-no-repeat flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={isVisible ? {
                opacity: 1
              } : {}}
              transition={{
                duration: 3,
                ease: 'easeInOut',
              }}
            >
              <img
                ref={ImgRef}
                src={BgApp}
                alt=""
                className="px-2"
              />
            </motion.div>
          )}
        </VisibilitySensor>
      </div>
    </>
  );
};
