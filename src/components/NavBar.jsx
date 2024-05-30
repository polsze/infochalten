import Logo from "../assets/img/logo-infochalten.png";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useIdioma } from "./IdiomaContext";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";


const NavBar = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  const [menuIcon, setMenuIcon] = useState("majesticons:menu"); // Estado para el ícono del menú
  const { idiomaActual, cambiarIdioma } = useIdioma();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    // Cambiar el ícono del menú según si el menú está visible o no
    setMenuIcon(menuVisible ? "majesticons:menu" : "flowbite:close-outline");
  };

  const textos = {
    es: {
      navItem: "Cómo instalar la APP",
      navItem2: "Unite como empresa",
      navItem3: "Sobre Nosotros",
      navItem4: "Contacto",
    },
    en: {
      navItem: "How to install our APP",
      navItem2: "Add your company",
      navItem3: "About Us",
      navItem4: "Contact",
    },
  };

  const preventDefaultClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuVisible(false); // Cerrar el menú después de hacer clic en un enlace
      setMenuIcon("majesticons:menu"); // Restaurar el ícono del menú
    }
  };

  const titleTexts = {
    es: "InfoChalten | Hoteles, gastronomía, transporte y más",
    en: "InfoChalten | Hotels, gastronomy, transport and more",
  };

  useEffect(() => {
    document.title = titleTexts[idiomaActual];
  }, [idiomaActual]);

  

  return (
    <>
      <div className="w-full h-auto absolute flex flex-row items-center justify-around bg-transparent">
        <div className="">
          <LazyLoadImage
            src={Logo}
            className=""
            alt="Info Chalten Logo"
            width={100}
            height={150}
          />
        </div>

        <div className="w-2/3 xl:hidden">
          <nav>
            <motion.ul
              className="flex flex-row items-center justify-evenly text-2xl "
              initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: .8, ease: "easeIn" }}
            >
              <li className="my-6"
              
              >
                <a href="#" className="text-white hidden sm:block" onClick={toggleMenu}>
                  <Icon icon="flowbite:close-outline" width={40} />
                </a>
              </li>
              <motion.li className={`my-6 font-oswald font-extrabold uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300`}
              whileHover={{ y: -10 }}>
                <a href="#" onClick={(e) => preventDefaultClick(e, "install")}>
                  {textos[idiomaActual].navItem}
                </a>
              </motion.li>
              <motion.li className={`my-6 font-oswald font-extrabold uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300`}
              whileHover={{ y: -10 }}>
                <a href="#" onClick={(e) => preventDefaultClick(e, "company")}>
                  {textos[idiomaActual].navItem2}
                </a>
              </motion.li>
              <motion.li className={`my-6 font-oswald font-extrabold uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300`}
              whileHover={{ y: -10 }}>
                <a href="#" onClick={(e) => preventDefaultClick(e, "about")}>
                  {textos[idiomaActual].navItem3}
                </a>
              </motion.li>
              <motion.li className={`my-6 font-oswald font-extrabold uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300`}
              whileHover={{ y: -10 }}>
                <a href="#" onClick={(e) => preventDefaultClick(e, "contact")}>
                  {textos[idiomaActual].navItem4}
                </a>
              </motion.li>

            </motion.ul>
          </nav>
        </div>



        <motion.div
          className={`bg-black h-screen w-64 absolute top-0 left-0 transform transition-transform z-50 ${menuVisible ? 'translate-x-0, sm:w-full' : '-translate-x-full'}`}
        >

          <div className="flex flex-col items-center justify-center h-full">
            <div className="">
              <LazyLoadImage
                src={Logo}
                className=""
                alt="Info Chalten Logo"
                width={100}
                height={150}
              />
            </div>

            <motion.ul
              className="flex flex-col items-center text-2xl"
            >
              <li className="my-3">
                <a href="#" className="text-white hidden sm:block" onClick={toggleMenu}>
                  <Icon icon="flowbite:close-outline" width={40} />
                </a>
              </li>
              <li className={`my-3 font-oswald font-extrabold uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300`}>
                <a href="#" onClick={(e) => preventDefaultClick(e, "install")}>
                  {textos[idiomaActual].navItem}
                </a>
              </li>
              <li className={`my-3 font-oswald font-extrabold uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300`}>
                <a href="#" onClick={(e) => preventDefaultClick(e, "company")}>
                  {textos[idiomaActual].navItem2}
                </a>
              </li>
              <li className={`my-3 font-oswald font-extrabold uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300`}>
                <a href="#" onClick={(e) => preventDefaultClick(e, "about")}>
                  {textos[idiomaActual].navItem3}
                </a>
              </li>
              <li className={`my-3 font-oswald font-extrabold uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300`}>
                <a href="#" onClick={(e) => preventDefaultClick(e, "contact")}>
                  {textos[idiomaActual].navItem4}
                </a>
              </li>
              <div className='flex flex-row items-center justify-center sm:mt-6'>
                <motion.a href="https://www.facebook.com/profile.php?id=100081748065499" target='_blank' whileHover={{ y: -10 }}><Icon icon="devicon:facebook" className='mr-6 sm:mr-2' width={30} /></motion.a>
                <motion.a href="https://www.instagram.com/infochalten.app/" target='_blank' whileHover={{ y: -10 }}> <Icon icon="skill-icons:instagram" className='sm:mr-3 ' width={30} /></motion.a>
              </div>
            </motion.ul>
          </div>
        </motion.div>
        <motion.div className='flex flex-row items-center sm:hidden'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2, ease: "easeInOut"}}
        >
          <motion.a href="https://www.facebook.com/profile.php?id=100081748065499" target='_blank' whileHover={{ y: -10 }}><Icon icon="devicon:facebook" className='mr-6 sm:mr-2' width={30} /></motion.a>
          <motion.a href="https://www.instagram.com/infochalten.app/" target='_blank' whileHover={{ y: -10 }}> <Icon icon="skill-icons:instagram" className='sm:mr-3 ' width={30} /></motion.a>
        </motion.div>

        <motion.div
          className="flex flex-row items-center sm:pr-0 xs:pr-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <Link
            to="/"
            className="flex items-center bg-transparent text-gray-800 rounded mr-4 lg:mr-2 sm:mr-2 xs:mr-4"
            onClick={() => cambiarIdioma("es")}
          >
            <Icon icon="twemoji:flag-argentina" width="25" />
            <span
              aria-label={`${idiomaActual === "es" ? "Bandera de España" : "Flag of Spain"
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
              aria-label={`${idiomaActual === "es"
                ? "Bandera de Estados Unidos"
                : "Flag of the United States"
                }`}
            >
              {" "}
            </span>
          </Link>
        </motion.div>
        <div className="hidden xl:block">
          <nav className="w-full">
            <ul className="flex flex-row text-white text-2xl xl:text-lg sm:w-full">
              <li className={`mr-12 font-oswald font-extrabold uppercase whitespace-nowrap lg:mr-8 hover:text-orange-500 transition-all ease-linear duration-300 sm:mr-0`}>
                <a href="#" onClick={toggleMenu}>
                  <Icon icon={menuIcon} width={40} /> {/* Utilizar el estado del ícono del menú */}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
