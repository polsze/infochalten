import React, { createContext, useContext, useState } from 'react';

const IdiomaContext = createContext();

export const IdiomaProvider = ({ children }) => {
  const [idiomaActual, setIdiomaActual] = useState('es');

  const cambiarIdioma = (nuevoIdioma) => {
    setIdiomaActual(nuevoIdioma);
  };

  return (
    <IdiomaContext.Provider value={{ idiomaActual, cambiarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};

export const useIdioma = () => {
  return useContext(IdiomaContext);
};
