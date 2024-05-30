import { motion } from "framer-motion";
import { useIdioma } from "./IdiomaContext";
import { useInView } from "react-intersection-observer";
import LogoNegro from "../assets/img/logo-negro.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const About = () => {
  const [refAboutImage, inViewImage] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const { idiomaActual } = useIdioma();

  const titulos = {
    es: "Sobre Nosotros",
    en: "About Us",
  };

  const tituloDos = {
    es: "¿Cómo surgió la idea?",
    en: "How did the idea come about?",
  }

  const contenidoA = {
    es: "Hola mi nombre es Germán, y espero que InfoChalten te sea de utilidad.",
    en: "Hello my name is Germán, and I hope that InfoChalten will be useful to you."
  };

  const contenidoB = {
    es: "Este proyecto nace en redes sociales, en un pueblo pequeño donde las personas que precisaban comprar algún producto en particular o contratar servicios no disponían de información centralizada y ordenada, y siempre había que estar preguntando ¿quién hace esto? ¿quién vende aquello? A esto se le sumó, por interés personal, la oferta de comida a domicilio. ¡Hoy no cocino! Y de repente me encontré con que estos intereses de la comunidad también podían ser de interés para el turismo que nos visita cada año.",
    en: "This project was born in social networks, in a small town where people who needed to buy a particular product or hire services did not have centralized and organized information, and they always had to ask: who does this? who sells that? Added to this, out of personal interest, was the offer of home delivery. Today I don't cook! And suddenly I found that these interests of the community could also be of interest to the tourism that visits us every year."
  }

  const contenidoC = {
    es: "De esta manera comencé a ampliar la base de datos, llegando a lo que hoy es InfoChalten. Una plataforma que brinda información de la oferta local, conectando visitantes y residentes con productoras, artistas, comercios, servicios, etc. Todo en un solo lugar y totalmente gratis.",
    en: "In this way I began to expand the database, reaching what is today InfoChalten. A platform that provides information on local offerings, connecting visitors and residents with producers, artists, businesses, services, etc. Everything in one place and totally free."
  }

  const contenidoDos = {
    es: "Más de 500 empresas en nuestra base de datos",
    en: "Over 500 companies in our database.",
  };
  const contenidoTres = {
    es: "Una aplicación diseñada tanto para turistas como para residentes locales.",
    en: "A tourism-focused application for both tourists and locals.",
  };
  const contenidoCuatro = {
    es: "Si querés que tu empresa obtenga beneficios en nuestra aplicación, contáctanos.",
    en: "If you want your company to benefit from our application, contact us.",
  };

  const textoBoton = {
    es: 'Ir a la APP',
    en: 'Go to the APP'
  }

  return (
    <>
      <motion.div
        id="about"
        className="font-solitreo h-auto flex items-center justify-center max-w-screen-xl bg-aboutBg2 bg-contain bg-no-repeat bg-center sm:bg-none"
        initial={{ x: "-50%" }}
        animate={{ x: inViewImage ? 0 : "-50%" }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        ref={refAboutImage}
      >
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 mb-10 md:text-center md:mb-20">
            <h2 className="mt-12 pb-2 text-4xl font-bold text-black font-protest text-center md:text-4xl">
              {titulos[idiomaActual]}
            </h2>
            <div className="flex w-32 mx-auto mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div className="flex-1 h-2 bg-orange-200">
              </div>
              <div className="flex-1 h-2 bg-orange-400">
              </div>
              <div className="flex-1 h-2 bg-orange-300">
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full px-4 mb-10 lg:mb-0">
              <LazyLoadImage src={LogoNegro} alt="InfoChalten logo"
                className="object-cover mx-auto" data-aos="flip-down" />
            </div>
            <div className="w-full px-4 mb-10 lg:mb-0">
              <h3
                className="py-3 pl-2 mb-4 text-2xl font-bold font-protest border-l-4 border-orange-500">
                {tituloDos[idiomaActual]}
              </h3>
              <br></br>

              <p className="mb-4 text-2xl leading-7 pl-1 text-gray-500 font-amatic font-extrabold" style={{ whiteSpace: "pre-line" }}>
                {contenidoA[idiomaActual]}
              </p>
              <br></br>
              <p className="mb-4 text-2xl leading-7 pl-1 text-gray-500 font-amatic font-extrabold" style={{ whiteSpace: "pre-line" }}>
                {contenidoB[idiomaActual]}
              </p>
              <br></br>

              <p className="mb-4 text-2xl leading-7 pl-1 text-gray-500 font-amatic font-extrabold" style={{ whiteSpace: "pre-line" }}>
                {contenidoC[idiomaActual]}
              </p>
              <br></br>

              <ul className="mb-10">
                <li className="font-protest flex items-center mb-4 text-base text-gray-600 ">
                  <span className="mr-3 text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                      <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  {contenidoDos[idiomaActual]}
                </li>
                <li className="font-protest flex items-center mb-4 text-base text-gray-600 ">
                  <span className="mr-3 text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                      <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  {contenidoTres[idiomaActual]}
                </li>
                <li className="font-protest flex items-center mb-4 text-base text-gray-600 ">
                  <span className="mr-3  text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                      <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  {contenidoCuatro[idiomaActual]}
                </li>
              </ul>
              <a href="https://infochalten.glide.page/" target="_blank"
                className="px-4 py-3 text-white transition-all  bg-orange-500 rounded-lg flex items-center flex-row m-auto justify-center font-protes duration-300 ease-linear hover:bg-violet-500 hover:shadow-naranja">
                {textoBoton[idiomaActual]}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
