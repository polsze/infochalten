import { createContext, useContext, useState } from 'react';
import ImgLink2 from '../assets/img/link2-es.webp';
import ImgLink2En from '../assets/img/link2-en.webp';
const IdiomaContext = createContext();

export const IdiomaProvider = ({ children }) => {
  const [idiomaActual, setIdiomaActual] = useState('es');

const imagenes = {
    'es': {
     
      'ImgLink2': ImgLink2
      
    },
    'en': {
      
      'ImgLink2': ImgLink2En
     
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
