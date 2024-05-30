import Logo from '../assets/img/infochalten.avif';
import { Icon } from '@iconify/react';
import { useIdioma } from './IdiomaContext'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from "framer-motion";

const Footer = () => {
  const { idiomaActual } = useIdioma();

  const textos = {
    'es': {
      derechos: 'InfoChalten™ 2024, todos los derechos reservados.',
    },
    'en': {
      derechos: 'InfoChalten™ 2024, all rights reserved.',
    },
  };

  const handleArrowClick = (event) => {
    event.preventDefault();
    const mainView = document.getElementById('main-view'); 
    if (mainView) {
      mainView.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className='w-full h-auto bg-violet-700 pt-10'>
        <div className='flex flex-row items-center justify-evenly sm:flex-col'>
          <div>
            <LazyLoadImage src={Logo} className='h-36 w-32 sm:mb-4' alt="InfoChalten logo" loading="lazy" />
          </div>
          <div className='flex flex-row sm:mb-8'>
            <motion.a href="https://www.facebook.com/profile.php?id=100081748065499" target='_blank' whileHover={{y: -10}}><Icon icon="devicon:facebook" width="40" className='mr-6 sm:mr-2'  /></motion.a>
            <motion.a href="https://www.instagram.com/infochalten.app/" target='_blank' whileHover={{y: -10}}> <Icon icon="skill-icons:instagram" width="40" className='sm:mr-3 ' /></motion.a>
          </div>
          <div className='flex flex-col bg-violet-700'>
            <ul className='font-oswald text-lg'>
              <li className='flex flex-row items-center justify-center text-white'><Icon icon="line-md:email" color="white" width="30" className='mr-1' />
                contacto@infochalten.com</li>
              <li className='my-4 flex flex-row items-center justify-center text-white'><Icon icon="line-md:my-location-loop" width="30" color="white" className='mr-1' />El Chaltén, Santa Cruz, Argentina</li>
              <li className='flex flex-row text-center text-white bg-violet-700 sm:mb-4'>
                {textos[idiomaActual].derechos}
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center bg-violet-500'>
          <a href="https://bakutech.com.ar/" target='_blank' className='text-yellow-400 font-oswald uppercase m-auto sm:mb-5' rel="noreferrer">
            bakutech systems
          </a>
          <a href="#" onClick={handleArrowClick}>
            <Icon icon="solar:double-alt-arrow-up-bold" color="white" width="50" className='mr-10 sm:mb-3' />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;