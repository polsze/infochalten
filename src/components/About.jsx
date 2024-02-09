import { motion } from "framer-motion";
import { useIdioma } from "./IdiomaContext";
import { useInView } from "react-intersection-observer";
import imgAbout from "../assets/img/imgAbout.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const About = () => {
  const [refAboutImage, inViewImage] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const [refAboutText, inViewText] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const { idiomaActual } = useIdioma();

  const titulos = {
    es: "Sobre Nosotros",
    en: "About Us",
  };

  const contenido = {
    es: "Hola mi nombre es Germán, y espero que Info Chalten te sea de utilidad. \n \n \n Este proyecto nace en redes sociales, en un pueblo pequeño donde las personas que precisaban comprar algún producto en particular o contratar servicios no disponían de información centralizada y ordenada, y siempre había que estar preguntando ¿quién hace esto? ¿quién vende aquello? A esto se le sumó, por interés personal, la oferta de comida a domicilio. ¡Hoy no cocino! Y de repente me encontré con que estos intereses de la comunidad también podían ser de interés para el turismo que nos visita cada año.\n \n \n De esta manera comencé a ampliar la base de datos, llegando a lo que hoy es Info Chalten. Una plataforma que brinda información de la oferta local, conectando visitantes y residentes con productoras, artistas, comercios, servicios, etc. Todo en un solo lugar y totalmente gratis. \n\n \n",
    en: "Hello my name is Germán, and I hope that Info Chalten will be useful to you. This project was born in social networks, in a small town where people who needed to buy a particular product or hire services did not have centralized and organized information, and they always had to ask: who does this? who sells that? Added to this, out of personal interest, was the offer of home delivery. Today I don't cook! And suddenly I found that these interests of the community could also be of interest to the tourism that visits us every year. In this way I began to expand the database, reaching what is today Info Chalten. A platform that provides information on local offerings, connecting visitors and residents with producers, artists, businesses, services, etc. Everything in one place and totally free.",
  };

  const imageAlts = {
    es: {
      imgAbout: "Conocé acerca de Info Chalten",
    },
    en: {
      imgAbout: "Learn about Info Chaltén",
    },
  };

  const getImageAltText = (imageName, currentLanguage) => {
    return imageAlts[currentLanguage]?.[imageName] || "";
  };

  return (
    <>
      <motion.div
        id="about"
        className="h-auto flex items-center justify-center max-w-screen-xl bg-aboutBg2 bg-contain bg-no-repeat bg-center sm:flex-col sm:bg-none"
        initial={{ x: "-50%" }}
        animate={{ x: inViewImage ? 0 : "-50%" }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        ref={refAboutImage}
      >
        <div className="mt-10">
          <div className="image object-center text-center">
            <LazyLoadImage
              src={imgAbout}
              alt={getImageAltText("imgAbout", idiomaActual)}
              loading="lazy"
              width={512}
              height={512}
            />
          </div>
        </div>

        <div className="">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase"></span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              <span className="text-gray-200 text-7xl relative top-10 left-2 -z-10 sm:text-4xl sm:top-7 sm:left-1">
                {titulos[idiomaActual].split("").map((char, index) => (
                  <motion.span
                    key={char + "-" + index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inViewImage ? 1 : 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <br></br>
              <span className="text-violet-600 text-6xl sm:text-4xl">
                {titulos[idiomaActual].split("").map((char, index) => (
                  <motion.span
                    key={char + "-" + index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inViewImage ? 1 : 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h2>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewText ? 1 : 0 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        ref={refAboutText}
      >
        <div
          className="text-gray-700 w-1/2 font-oswald text-xl p-4 border-b-8 mt-6 sm:w-[95%] sm:px-4"
          style={{ whiteSpace: "pre-line" }}
        >
          {contenido[idiomaActual]}
        </div>
      </motion.div>
    </>
  );
};

export default About;
