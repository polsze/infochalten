import ImgLink from "../assets/img/link.webp";
import ImgLinkSmall from "../assets/img/linksmall.webp";
import ImgLinkSmall2 from "../assets/img/app-icon.webp";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useIdioma } from "./IdiomaContext";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Install = () => {
  const [refInstall, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const { idiomaActual, obtenerImagen } = useIdioma();

  const textos = {
    es: {
      titulo: "Como instalar la App en tu dispositivo móvil",
      paso1:
        " Abre la aplicación en Google Chrome utilizando el enlace proporcionado a continuación",
      paso2: ' Tocá en el "Menú desplegable"',
      paso3: ' Luego haz clic en la opción "Instalar Aplicación"',
      paso4:
        " Al completar la descarga, podrás agregar un acceso directo a la pantalla de inicio para acceder fácilmente a nuestra aplicación",
    },
    en: {
      titulo: "How to install the App on your mobile device",
      paso1:
        " Open the application in Google Chrome using the link provided below",
      paso2: ' Tap on the "Dropdown Menu"',
      paso3: ' Then click on the "Install Application" option',
      paso4:
        " Upon completion of the download, you can add a shortcut to the home screen for easy access to our application",
    },
  };

  const imageAlts = {
    es: {
      ImgLink: "Link de la aplicacion Info Chalten",
      ImgLink2: "Link de la aplicacion Info Chalten en Smart Phones",
      ImgLinkSmall: "Como instalar Info Chalten",
      ImgLinkSmall2: "Icono de Info Chalten",
    },
    en: {
      ImgLink: "Info Chalten App Link",
      ImgLink2: "Info Chalten App Link on Smartphones",
      ImgLinkSmall: "How to Install Info Chalten",
      ImgLinkSmall2: "Info Chalten Icon",
    },
  };

  const getImageAltText = (imageName, currentLanguage) => {
    return imageAlts[currentLanguage]?.[imageName] || "";
  };

  return (
    <>
      <div className="h-auto w-full">
        <div className="p-2 flex items-center ">
          <div className="border border-orange-500 w-full "></div>

          <h2
            className="text-center font-oswald text-4xl font-bold my-10 sm:text-3xl"
            
          >
          {textos[idiomaActual].titulo}
          </h2>

          <div className="border border-orange-500 w-full mx-2"></div>
        </div>

        <div className="grid grid-cols-2 gap-2 px-2 font-roboto sm:flex sm:flex-col">
          <motion.div
            className="col-span-1 row-span-1 bg-gray-100 p-4 flex flex-col items-center justify-evenly bg-paintBg  bg-cover bg-no-repeat"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            ref={refInstall}
          >
            <p className="mb-4 text-xl text-left font-oswald sm:text-lg">
              <b>1.</b> {textos[idiomaActual].paso1}
            </p>
            <a
              href="https://infochalten.glide.page/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ImgLink}
                alt={getImageAltText("ImgLink", idiomaActual)}
                width={411}
                height={38}
              />
            </a>
          </motion.div>

          <motion.div
            className="col-span-1 row-span-1 bg-gray-100 p-4 flex items-center justify-evenly bg-paintBg bg-no-repeat bg-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            ref={refInstall}
          >
            <div className="flex flex-row items-center md:flex-col sm:flex-col">
              <p className="text-xl text-left font-oswald sm:text-lg">
                <b>2.</b> {textos[idiomaActual].paso2}
              </p>
              <img
                src={ImgLinkSmall}
                alt={getImageAltText("ImgLinkSmall", idiomaActual)}
                className="ml-4 sm:mt-4"
                loading="lazy"
                width={249}
                height={34}
              />
              <Icon
                icon="zondicons:arrow-thin-left"
                className="ml-1 mt-1 md:hidden sm:relative sm:left-40 sm:bottom-8 "
                color="#F56903"
                width="22"
              />
            </div>
          </motion.div>

          <motion.div className="col-span-1 row-span-1 bg-gray-100 p-4 flex items-center justify-evenly bg-paintBg bg-no-repeat bg-right bg-cover">
            <div className="flex flex-col items-center justify-start sm:flex-col">
              <p className="text-xl text-left font-oswald sm:text-lg">
                <b>3.</b> {textos[idiomaActual].paso3}
              </p>
              <LazyLoadImage
                src={obtenerImagen("ImgLink2")}
                alt={getImageAltText("ImgLink2", idiomaActual)}
                className="ml-4 rounded-xl mt-4"
                loading="lazy"
                width={250}
                height={540}
              />{" "}
            </div>
          </motion.div>

          <motion.div className="col-span-1 row-span-1 bg-gray-100 p-4 flex items-center justify-evenly bg-paintBg bg-no-repeat bg-right bg-cover">
            <div className="flex flex-col items-center sm:flex-col">
              <p className="text-xl text-left font-oswald sm:text-lg">
                <b>4.</b> {textos[idiomaActual].paso4}
              </p>
              <LazyLoadImage
                src={ImgLinkSmall2}
                alt={getImageAltText("ImgLinkSmall2", idiomaActual)}
                className="ml-4 rounded-xl mt-4"
                loading="lazy"
                width={250}
                height={539}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Install;
