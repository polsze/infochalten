import { useIdioma } from "./IdiomaContext";
import AnimatedText from "./AnimatedText";
import { InView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import AnimatedTextBtn from "./AnimatedTextBtn";
import AnimatedTextSub from "./AnimatedTextSub";

const Hero = () => {
  const { idiomaActual } = useIdioma();

  const textos = {
    es: {
      titulo: "Bienvenid@s a InfoChalten",
      subtitulo:
        "Toda la información que necesitás para aprovechar El Chaltén al máximo",
      textButton: "Ir a la APP",
      textHelp: "Abajo las INSTRUCCIONES para INSTALAR la aplicación en tu smartphone",
    },
    en: {
      titulo: "Welcome to InfoChalten",
      subtitulo:
        "All the information you need to make the most of El Chaltén.",
      textButton: "Go to the App",
      textHelp: "Below are the INSTRUCTIONS to INSTALL the application on your smartphone",
    },
  };

  return (
    <div className={`w-full min-h-[100vh] flex flex-col items-start justify-center bg-no-repeat bg-cover xl:items-start lg:items-center sm:bg-center ${idiomaActual === 'es' ? 'bg-heroBg' : 'bg-heroBgEn'} ${idiomaActual === 'es' ? 'sm:bg-heroBgX' : 'sm:bg-heroBgX'}`} id="main-view">

      <div className="flex items-center  flex-col xxl:mt-24 sm:mt-0 xl:w-[70%]">
        <InView triggerOnce={false} rootMargin="-100px 0px">
          {({ inView: inViewTitle, ref: refTitle }) => (
            <div
              className="font-bold mb-4 "
              ref={refTitle}
            >
              <h1>
              <AnimatedText
                text={textos[idiomaActual].titulo}
                className="font-solitreo font-bold !text-7xl text-white  xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl sm:ml-2"
                inView={inViewTitle}
              />
              </h1>
            </div>
          )}
        </InView>
        <InView triggerOnce={false} rootMargin="-100px 0px">
          {({ inView: inViewSubtitle, ref: refSubtitle }) => (
            <div
              className="font-oswald mb-2 xxl:my-0 sm:my-0 sm:text-2xl sm:px-1 xs:text-xl "
              ref={refSubtitle}
            >
              <AnimatedTextSub
                text={textos[idiomaActual].subtitulo}
                className="!text-4xl font-semibold text-white xl:!text-4xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl xs:w-full"
                inView={inViewSubtitle}
              />
            </div>
          )}
        </InView>
        <InView triggerOnce={false} rootMargin="-100px 0px">
          {({ inView: inViewButton, ref: refButton }) => (
            <a
              href="https://infochalten.glide.page/"
              target="_blank"
              rel="noreferrer"
              className=" bg-orange-500 shadow-naranja outline text-white flex items-center justify-start w-40 h-auto rounded-2xl
               font-amatic font-semibold text-center mt-6 sm:w-28 sm:ml-0 duration-300 ease-linear hover:bg-violet-500 hover:shadow-violeta hover:outline-orange-400 "
              ref={refButton}
            >
              <AnimatedTextBtn
                text={textos[idiomaActual].textButton}
                className="!w-full !text-4xl xl:!text-xl lg:!text-center lg:!text-xl md:!text-xl sm:!text-xl"
                inView={inViewButton}
              />
            </a>
          )}
        </InView>
      </div>
      <div className="absolute bottom-0 flex items-center flex-col justify-center w-full text-white text-2xl font-bold sm:text-base sm:px-1">
        <p className="font-solitreo text-center">{textos[idiomaActual].textHelp}</p>
        <Icon icon="foundation:arrow-down" color="yellow" className="pb-1 animate-bounce" width={35}/>
      </div>
    </div>
  );
};

export default Hero;
