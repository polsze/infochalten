import { useEffect } from 'react';
import { useIdioma } from './IdiomaContext';
import { useNavigate, useLocation } from 'react-router-dom';

const RedireccionarIdioma = () => {
  const { idiomaActual } = useIdioma();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Determinar la URL de destino según el idioma actual
    const urlDestino = idiomaActual === 'en' ? '/en' : '/';

    // Redirigir solo si la URL actual no coincide con la URL de destino
    if (location.pathname !== urlDestino) {
      navigate(urlDestino);
    }
  }, [idiomaActual, location.pathname, navigate]);

  return null;
};

export default RedireccionarIdioma;
