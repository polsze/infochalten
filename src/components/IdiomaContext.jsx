import { createContext, useContext, useState } from 'react';


import ImgLink2 from '../assets/img/link2-es.png';
import ImgLink2En from '../assets/img/link2-en.png';

import ImgIOS from '../assets/img/ios-1.webp';
import ImgIOSEn from '../assets/img/ios-1-en.webp';

import ImgIOS2 from '../assets/img/ios-2.webp';
import ImgIOSEn2 from '../assets/img/ios-2-en.webp';

const IdiomaContext = createContext();

export const IdiomaProvider = ({ children }) => {
  const [idiomaActual, setIdiomaActual] = useState('es');

  const imagenes = {
    'es': {  
      'ImgLink2': ImgLink2,
      'ImgIOS': ImgIOS,
      'ImgIOS2': ImgIOS2
    },
    'en': {
      'ImgLink2': ImgLink2En,
      'ImgIOS': ImgIOSEn,
      'ImgIOS2': ImgIOSEn2
    },
  };

  const obtenerImagen = (imagenKey) => {
    return imagenes[idiomaActual][imagenKey];
  };

  
  const cambiarIdioma = (nuevoIdioma) => {
    setIdiomaActual(nuevoIdioma);
  };

  return (
    <IdiomaContext.Provider value={{ idiomaActual, cambiarIdioma, obtenerImagen }}>
    {children}
  </IdiomaContext.Provider>
  );
};

export const useIdioma = () => {
  return useContext(IdiomaContext);
};
