import React, { useContext } from 'react';
import Logo from '../assets/img/infochalten.avif';
import { Icon } from '@iconify/react';
import { useIdioma } from './IdiomaContext'; 

const Footer = () => {
  const { idiomaActual } = useIdioma();

  const textos = {
    'es': {
      derechos: 'InfoChaltén™ 2023, todos los derechos reservados.',
    },
    'en': {
      derechos: 'InfoChaltén™ 2023, all rights reserved.',
    },
  };

 

  return (
    <>
      <footer className='w-full h-auto bg-violet-700 pt-10 lg:h-screen lg:max-h-[700px] md:max-h-[550px] mds:md:max-h-[370px] sm:h-auto'>
        <div className='flex flex-row items-center justify-evenly sm:flex-col'>
          <div>
            <img src={Logo} alt="" className='h-36 sm:h-28 sm:mb-4' />
          </div>

          <div className='flex flex-row items-center relative left-32 xl:left-6 lg:left-0 sm:mb-4'>
            <Icon icon="devicon:facebook" width="40" className='mr-6 sm:mr-2' />
            <Icon icon="skill-icons:instagram" width="40" className='sm:mr-3' />
          </div>

          <div className='h-32 border relative left-64 xxl:left-28 xl:left-20 lg:hidden'></div>
          
          <div className='flex flex-col bg-violet-700 sm:pl-16 xs:pl-4'>
            <ul className='font-oswald text-lg'>
              <li className='flex flex-row items-center text-white'><Icon icon="line-md:email" color="white" width="30" className='mr-1' />
                contacto@infochalten.com</li>
              <li className='my-4 flex flex-row items-center text-white'><Icon icon="line-md:my-location-loop" width="30" color="white" className='mr-1' />El Chaltén, Santa Cruz, Argentina</li>
              <li className=' flex flex-row items-center text-white bg-violet-700 sm:mb-4'>
                <Icon icon="ph:trademark" width="30" color="white" className='mr-1' />
                {textos[idiomaActual].derechos}
              </li>

            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center bg-violet-500'>
          <a href="https://pbx-six.vercel.app/" target='_blank' className='text-yellow-400 font-oswald uppercase m-auto sm:mb-5'>pbx web design</a>
          <a href="#">
            <Icon icon="solar:double-alt-arrow-up-bold" color="white" width="50" className='mr-10 sm:mb-3' />
          </a>

        </div>
      </footer>
    </>
  );
};

export default Footer;