import React, { useState, useEffect } from 'react';
import useForm from "./useForm";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"
import VisibilitySensor from 'react-visibility-sensor';
import { useIdioma } from './IdiomaContext'; // Asegúrate de importar el contexto adecuado

export const Contact = () => {
  const { idiomaActual, toggleIdioma } = useIdioma();

  const titulos = {
    'es': 'Contacto',
    'en': 'Contact',
  };

  const labels = {
    'es': {
      nombre: 'Nombre',
      correo: 'Correo electrónico',
      asunto: 'Asunto',
      telefono: 'Teléfono',
      mensaje: 'Mensaje',
    },
    'en': {
      nombre: 'Name',
      correo: 'Email',
      asunto: 'Subject',
      telefono: 'Phone',
      mensaje: 'Message',
    },
  };


  const placeholders = {
    'es': {
      nombre: 'Ingrese su nombre aquí',
      correo: 'Ingrese su correo electrónico aquí',
      asunto: 'Ingrese su asunto aquí',
      telefono: 'Ingrese su número de teléfono aquí',
      mensaje: 'Ingrese mensaje aquí',
    },
    'en': {
      nombre: 'Enter your name here',
      correo: 'Enter your email here',
      asunto: 'Enter your subject here',
      telefono: 'Enter your phone number here',
      mensaje: 'Enter your message here',
    },
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

  const initialData = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
    telefono: "",
  };

  const onValidate = (form) => {
    let errors = {};
    // ... (sin cambios)
    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  useEffect(() => {
    setIsVisible(false); // Reinicia la visibilidad al cambiar de idioma
  }, [idiomaActual]);

  return (
    <>
      <div className='w-full h-3/4 mt-20 bg-wavesBg bg-contain pb-2 xxl:bg-cover'>
        <div className='flex flex-col items-center m-auto w-[60%] h-auto bg-gray-100 shadow-2xl shadow-orange-400 rounded-xl xl:w-[70%] lg:w-[90%] sm:w-[96%]'>

          <div className='rounded-xl w-full'>
            <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
              <motion.h4 className="text-5xl my-16 uppercase font-bold font-oswald text-center"
                variants={sentence}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {titulos[idiomaActual].split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.h4>
            </VisibilitySensor>
            <div className='h-1 w-full border-8 border-gray-300 mb-16 flex items-center justify-center'>
              <Icon icon="basil:contacts-solid" width="124" className='' />
            </div>

            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label className="form-label font-bold text-xl ml-6 sm:pl-2 2xl:text-2xl">{labels[idiomaActual].nombre}</label>
              <input
                type="text"
                className="form-control rounded-xl mx-6 sm:w-[95%] sm:mx-auto hover:bg-sky-200"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder={placeholders[idiomaActual].nombre}
              />
              {errors.nombre && (
                <div className="alert alert-danger p-2 rounded-xl mt-1 sm:w-[95%] sm:mx-auto">{errors.nombre}</div>
              )}

              <label className="form-label pt-2 ml-6 font-bold text-xl sm:pl-2 2xl:text-2xl">{labels[idiomaActual].correo}</label>
              <input
                type="email"
                className="form-control mx-6 rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200 "
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder={placeholders[idiomaActual].correo}
              />
              {errors.correo && (
                <div className="alert alert-danger rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">{errors.correo}</div>
              )}

              <label className="form-label pt-2 ml-6 font-bold text-xl sm:pl-2 2xl:text-2xl">{labels[idiomaActual].asunto}</label>
              <input
                type="text"
                className="form-control mx-6 rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
                name="asunto"
                value={form.asunto}
                onChange={handleChange}
                placeholder={placeholders[idiomaActual].asunto}
              />
              {errors.asunto && (
                <div className="alert alert-danger rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">{errors.asunto}</div>
              )}

              <label className="form-label pt-2 ml-6 font-bold text-xl sm:pl-2 2xl:text-2xl">{labels[idiomaActual].telefono}</label>
              <input
                type="text"
                className="form-control  mx-6 rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder={placeholders[idiomaActual].telefono}
              />
              {errors.telefono && (
                <div className="alert alert-danger p-2 mt-1 rounded-xl sm:w-[95%] sm:mx-auto">{errors.telefono}</div>
              )}

              <label className="form-label pt-2 ml-6 font-bold text-xl sm:pl-2 2xl:text-2xl">{labels[idiomaActual].mensaje}</label>
              <textarea
                className="form-control mx-6 rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                cols="40"
                rows="6"
                placeholder={placeholders[idiomaActual].mensaje}
              />
              {errors.mensaje && (
                <div className="alert alert-danger p-2 mt-1 rounded-xl sm:w-[95%] sm:mx-auto">{errors.mensaje}</div>
              )}

              <div className="flex items-center justify-center py-4">
                <motion.button
                  className="text-white py-2 rounded-xl font-bold text-xl bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 
              w-[100%] sm:w-[95%]"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
