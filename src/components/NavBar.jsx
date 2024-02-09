import Logo from "../assets/img/logo-infochalten.png";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useIdioma } from "./IdiomaContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NavBar = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -350 },
  };

  const { idiomaActual, cambiarIdioma } = useIdioma();

  const titleTexts = {
    es: "Info Chalten | Buscá todo lo necesario: Hoteles, gastronomía, y más",
    en: "Info Chalten | Find everything you need: Hotels, gastronomy and more",
  };

  useEffect(() => {
    document.title = titleTexts[idiomaActual];
  }, [idiomaActual]);

  const textos = {
    es: {
      navItem: "Nuestra App",
      navItem2: "Sobre Nosotros",
      navItem3: "Contacto",
    },
    en: {
      navItem: "Our App",
      navItem2: "About Us",
      navItem3: "Contact",
    },
  };

  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const preventDefaultClick = (event, sectionId) => {
    event.preventDefault();
    event.stopPropagation();
    handleLinkClick(sectionId);
  };

  return (
    <>
      <div className="w-full h-auto absolute flex flex-row items-center justify-around bg-transparent">
        <div className="sm:m-auto">
          <LazyLoadImage
            src={Logo}
            className=""
            alt="Info Chalten Logo"
            width={100}
            height={150}
          />
        </div>

        <div className="sm:hidden">
          <nav className="w-full">
            <motion.ul
              className="flex flex-row text-white text-2xl"
              initial="hidden"
              animate="visible"
              variants={list}
            >
              <motion.a
                className={`mr-12 font-oswald font-extrabold uppercase whitespace-nowrap lg:mr-8`}
                variants={item}
                href="https://infochalten.glide.page/"
                target="_blank"
              >
                {textos[idiomaActual].navItem}
              </motion.a>
              <motion.li
                className={`mr-12 font-oswald font-extrabold uppercase whitespace-nowrap lg:mr-8`}
                variants={item}
              >
                <a href="#" onClick={(e) => preventDefaultClick(e, "about")}>
                  {textos[idiomaActual].navItem2}
                </a>
              </motion.li>
              <motion.li
                className={`mr-12 font-oswald font-extrabold uppercase whitespace-nowrap lg:mr-8`}
                variants={item}
              >
                <a href="#" onClick={(e) => preventDefaultClick(e, "contact")}>
                  {textos[idiomaActual].navItem3}
                </a>
              </motion.li>
            </motion.ul>
          </nav>
        </div>

        <motion.div
          className="flex flex-row items-center sm:pr-16 xs:pr-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <Link
            to="/"
            className="flex items-center bg-transparent text-gray-800 rounded mr-4 lg:mr-2 sm:mr-8 xs:mr-4"
            onClick={() => cambiarIdioma("es")}
          >
            <Icon icon="twemoji:flag-spain" width="25" />
            <span
              aria-label={`${
                idiomaActual === "es" ? "Bandera de España" : "Flag of Spain"
              }`}
            >
              {" "}
            </span>
          </Link>
          <Link
            to="/en"
            className="flex items-center bg-transparent text-gray-800 rounded"
            onClick={() => cambiarIdioma("en")}
          >
            <Icon icon="twemoji:flag-united-states" width="25" />
            <span
              aria-label={`${
                idiomaActual === "es"
                  ? "Bandera de Estados Unidos"
                  : "Flag of the United States"
              }`}
            >
              {" "}
            </span>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default NavBar;
