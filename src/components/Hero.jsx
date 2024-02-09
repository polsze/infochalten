import { useIdioma } from "./IdiomaContext";
import AnimatedText from "./AnimatedText";
import { InView } from "react-intersection-observer";

const Hero = () => {
  const { idiomaActual } = useIdioma();

  const textos = {
    es: {
      titulo: "Bienvenid@s a Info Chalten",
      subtitulo:
        "Toda la información que necesitás para aprovechar El Chaltén al máximo",
      textButton: "Ir a la APP",
    },
    en: {
      titulo: "Welcome to the Info Chalten App",
      subtitulo:
        "All the information you need to make the most of El Chaltén.",
      textButton: "Go to the App",
    },
  };
  

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-center bg-heroBg bg-no-repeat bg-cover" id="main-view">
      <div className="xxl:mt-24  sm:mt-20">
        <InView triggerOnce={false} rootMargin="-100px 0px">
          {({ inView: inViewTitle, ref: refTitle }) => (
            <div
              className="font-oswald font-bold mb-4"
              ref={refTitle}
            >
              <AnimatedText
                text={textos[idiomaActual].titulo}
                className=" !text-5xl text-orange-400 xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl sm:ml-2"
                inView={inViewTitle}
              />
            </div>
          )}
        </InView>
        <InView triggerOnce={false} rootMargin="-100px 0px">
          {({ inView: inViewSubtitle, ref: refSubtitle }) => (
            <div
              className="font-oswald mb-2 xxl:my-4 sm:my-6 sm:text-2xl sm:px-1 xs:text-xl "
              ref={refSubtitle}
            >
              <AnimatedText
                text={textos[idiomaActual].subtitulo}
                className="!text-5xl font-semibold text-white xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
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
              className="border-4 border-orange-500 bg-orange-500 text-white flex items-center justify-center w-48 h-20 rounded-2xl
               font-oswald uppercase font-semibold text-center m-auto mb-2 mt-10 "
              ref={refButton}
            >
              <AnimatedText
                text={textos[idiomaActual].textButton}
                className="!w-full !text-3xl xl:!text-4xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl"
                inView={inViewButton}
              />
            </a>
          )}
        </InView>
      </div>
    </div>
  );
};

export default Hero;
