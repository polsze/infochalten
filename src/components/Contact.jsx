import { useState, useEffect } from "react";
import useForm from "./useForm";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useIdioma } from "./IdiomaContext";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const { idiomaActual } = useIdioma();
  const [refContact, inViewContact] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const titulos = {
    es: "Contacto",
    en: "Contact",
  };

  const labels = {
    es: {
      nombre: "Nombre",
      correo: "Correo electrónico",
      asunto: "Asunto",
      telefono: "Teléfono",
      mensaje: "Mensaje",
    },
    en: {
      nombre: "Name",
      correo: "Email",
      asunto: "Subject",
      telefono: "Phone",
      mensaje: "Message",
    },
  };

  const placeholders = {
    es: {
      nombre: "Ingrese su nombre aquí",
      correo: "Ingrese su correo electrónico aquí",
      asunto: "Ingrese su asunto aquí",
      telefono: "Ingrese su número de teléfono aquí",
      mensaje: "Ingrese mensaje aquí",
    },
    en: {
      nombre: "Enter your name here",
      correo: "Enter your email here",
      asunto: "Enter your subject here",
      telefono: "Enter your phone number here",
      mensaje: "Enter your message here",
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
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    let regexPhoneNumber = /^[\d-]+$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo "Nombre" no debe estar vacío.';
    } else if (!regexName.test(form.nombre)) {
      errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.';
    }

    if (!form.correo.trim()) {
      errors.correo = 'El campo "Correo" no debe estar vacío.';
    } else if (!regexEmail.test(form.correo)) {
      errors.correo = 'El campo "Correo" contiene un formato no válido.';
    }

    if (!form.asunto.trim()) {
      errors.asunto = 'El campo "Asunto" no debe estar vacío.';
    } else if (!regexName.test(form.asunto)) {
      errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.';
    }

    if (!form.telefono.trim()) {
      errors.telefono = 'El campo "Teléfono" es obligatorio.';
    } else if (!regexPhoneNumber.test(form.telefono)) {
      errors.telefono =
        'El campo "Teléfono" solo debe contener números y guiones.';
    }

    if (!form.mensaje.trim()) {
      errors.mensaje = 'El campo "Mensaje" no debe estar vacío.';
    } else if (!regexComments.test(form.mensaje)) {
      errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.';
    }

    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  useEffect(() => {
    setIsVisible(false);
  }, [idiomaActual]);


  return (
    <>
      <div className="w-full h-auto mt-20 bg-contactBg bg-contain pb-2 xxl:bg-cover" id="contact">
        <div className="flex flex-col items-center m-auto w-[60%] h-auto bg-gray-100 shadow-2xl shadow-orange-400 rounded-xl xl:w-[70%] lg:w-[90%] sm:w-[96%]">
          <div className="rounded-xl w-full" ref={refContact}>
            <motion.h4
              className="text-5xl my-16 uppercase font-bold font-oswald text-center sm:text-2xl"
              variants={sentence}
              initial="hidden"
              animate={inViewContact ? "visible" : "hidden"}
            >
              {titulos[idiomaActual].split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h4>
            <div className="h-1 w-full border-8 border-gray-300 mb-16 flex items-center justify-center">
              <Icon icon="basil:contacts-solid" width="124" className="" />
            </div>

            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label className="form-label font-bold px-2 text-xl ml-6  2xl:text-2xl sm:ml-1">
                {labels[idiomaActual].nombre}
              </label>
              <input
                type="text"
                className="form-control rounded-xl mx-6 px-2 sm:w-[95%] sm:mx-auto hover:bg-sky-200"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder={placeholders[idiomaActual].nombre}
              />
              {errors.nombre && (
                <div className="alert alert-danger text-red-600 p-2 rounded-xl mt-1 sm:w-[95%] sm:mx-auto">
                  {errors.nombre}
                </div>
              )}

              <label className="form-label pt-2 px-2 ml-6 font-bold text-xl  2xl:text-2xl sm:ml-1 sm:pl-2">
                {labels[idiomaActual].correo}
              </label>
              <input
                type="email"
                className="form-control mx-6 rounded-xl px-2 sm:w-[95%] sm:mx-auto hover:bg-sky-200 "
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder={placeholders[idiomaActual].correo}
              />
              {errors.correo && (
                <div className="alert alert-danger text-red-600 rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">
                  {errors.correo}
                </div>
              )}

              <label className="form-label pt-2 px-2 ml-6 font-bold text-xl 2xl:text-2xl sm:pl-2 sm:ml-1">
                {labels[idiomaActual].asunto}
              </label>
              <input
                type="text"
                className="form-control mx-6 px-2 rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
                name="asunto"
                value={form.asunto}
                onChange={handleChange}
                placeholder={placeholders[idiomaActual].asunto}
              />
              {errors.asunto && (
                <div className="alert alert-danger text-red-600 rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">
                  {errors.asunto}
                </div>
              )}

              <label className="form-label pt-2 px-2 ml-6 font-bold text-xl 2xl:text-2xl sm:pl-2 sm:ml-1">
                {labels[idiomaActual].telefono}
              </label>
              <input
                type="text"
                className="form-control px-2 mx-6 rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder={placeholders[idiomaActual].telefono}
              />
              {errors.telefono && (
                <div className="alert alert-danger text-red-600 p-2 mt-1 rounded-xl sm:w-[95%] sm:mx-auto">
                  {errors.telefono}
                </div>
              )}

              <label className="form-label pt-2 px-2 ml-6 font-bold text-xl 2xl:text-2xl sm:pl-2 sm:ml-1">
                {labels[idiomaActual].mensaje}
              </label>
              <textarea
                className="form-control mx-6 px-2 rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                cols="40"
                rows="6"
                placeholder={placeholders[idiomaActual].mensaje}
              />
              {errors.mensaje && (
                <div className="alert alert-danger text-red-600 p-2 mt-1 rounded-xl sm:w-[95%] sm:mx-auto">
                  {errors.mensaje}
                </div>
              )}

              <div className="flex items-center justify-center py-4">
                <motion.button
                  className="text-white py-2 rounded-xl font-bold text-xl bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 
              w-[20%] sm:w-[95%]"
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
  );
};

export default Contact;
