import ImgLink from "../assets/img/linkIOS.webp";
import ImgIOSScreen from "../assets/img/ios-screen.webp";
import { motion } from "framer-motion";
import { useIdioma } from "./IdiomaContext";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const InstallIOS = () => {
  const [refInstall, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const { idiomaActual, obtenerImagen } = useIdioma();

  const textos = {
    es: {
      titulo: "Como instalar la App en tu dispositivo móvil iOS",
      paso1:
        "Abrí la aplicación en el navegador utilizando el enlace proporcionado a continuación",
      paso2: 'Tocá donde dice "Presiona"',
      paso3: 'Luego tocá en la opción "Agregar a inicio"',
      paso4:
        "Al completar los pasos, podrás ver el acceso directo en la pantalla de inicio para acceder fácilmente a nuestra aplicación",
    },
    en: {
      titulo: "How to install the app on your iOS mobile device.",
      paso1:
        "Open the application in the browser using the link provided below.",
      paso2: 'Tap on the dropdown menu button.',
      paso3: 'Then click on the "Add to Home Screen" option',
      paso4:
        "After completing the steps, a shortcut will appear on your home screen, facilitating access to our application.",
    },
  };

  const imageAlts = {
    es: {
      ImgLink: "Link de la aplicacion InfoChalten",
      ImgLink2: "Link de la aplicacion InfoChalten en Smart Phones",
      ImgLinkSmall: "Como instalar InfoChalten",
      ImgLinkSmall2: "Icono de InfoChalten",
    },
    en: {
      ImgLink: "InfoChalten App Link",
      ImgLink2: "InfoChalten App Link on Smartphones",
      ImgLinkSmall: "How to Install InfoChalten",
      ImgLinkSmall2: "InfoChalten Icon",
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
            className="text-center font-amatic text-4xl font-bold my-10 sm:text-2xl"
            
          >
          {textos[idiomaActual].titulo}
          </h2>

          <div className="border border-orange-500 w-full mx-2"></div>
        </div>

        <div className="grid grid-cols-2 gap-2 px-2 font-roboto sm:flex sm:flex-col">
          <motion.div
            className="col-span-1 row-span-1 bg-gray-100 p-4 flex flex-col items-center justify-center bg-paintBg bg-cover bg-no-repeat"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            ref={refInstall}
          >
            <p className="mb-4 text-2xl text-left font-solitreo sm:text-xl">
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
            <div className="flex flex-col items-center md:flex-col sm:flex-col">
              <p className="text-2xl text-left font-solitreo sm:text-xl">
                <b>2.</b> {textos[idiomaActual].paso2}
              </p>
              <img
                src={obtenerImagen("ImgIOS")}
                alt={getImageAltText("ImgIOS", idiomaActual)}
                className="ml-4 sm:mt-4 sm:ml-0"
                loading="lazy"
                width={249}
                height={34}
              />
            </div>
          </motion.div>

          <motion.div className="col-span-1 row-span-1 bg-gray-100 p-4 flex items-center justify-evenly bg-paintBg bg-no-repeat bg-right bg-cover">
            <div className="flex flex-col items-center justify-start sm:flex-col">
              <p className="text-2xl text-left font-solitreo sm:text-xl">
                <b>3.</b> {textos[idiomaActual].paso3}
              </p>
              <LazyLoadImage
                src={obtenerImagen("ImgIOS2")}
                alt={getImageAltText("ImgIOS2", idiomaActual)}
                className="ml-4 rounded-xl mt-4 sm:ml-0"
                loading="lazy"
                width={250}
                height={540}
              />{" "}
            </div>
          </motion.div>

          <motion.div className="col-span-1 row-span-1 bg-gray-100 p-4 flex items-center justify-evenly bg-paintBg bg-no-repeat bg-right bg-cover">
            <div className="flex flex-col items-center sm:flex-col">
              <p className="text-2xl text-left font-solitreo sm:text-xl">
                <b>4.</b> {textos[idiomaActual].paso4}
              </p>
              <LazyLoadImage
                src={ImgIOSScreen }
                alt={getImageAltText("ImgIOSScreen", idiomaActual)}
                className="ml-4 rounded-xl mt-4 sm:ml-0"
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

export default InstallIOS;
