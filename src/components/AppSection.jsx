import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useIdioma } from './IdiomaContext';

import {
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  GiftIcon,
  HomeModernIcon,
  MapIcon,
  StarIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const AppSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px", // Adjust the root margin as needed
  });

  const { idiomaActual } = useIdioma();


  const titulo = {
    'es' : '¿Porqué usar nuestra App?',
    'en' : 'Why use the InfoChaltén App?'
  }

  const descripcion = {
    'es' : "En Info Chalten vas a encontrar toda la información que necesitás concentrada en un solo lugar, organizada por categorías para que puedas acceder fácilmente a lo que estás buscando. Ya sea que estés de viaje para conocer nuestro pueblo, que vengas a trabajar por la temporada o seas residente, Info Chalten será tu aliada para encontrar eso que querés, No te pierdas de nada! Y además de todo lo que tiene para ofrecerte ¡es Gratis!",
    'en' : "In Info Chalten, you will find all the information you need concentrated in one place, organized by categories so you can easily access what you're looking for. Whether you're traveling to explore our town, coming to work for the season, or a resident, Info Chalten will be your ally in finding what you want. Don't miss out on anything! And besides all it has to offer, it's Free!"
  }

  const texto1 = {
    'es' : "Todo esto y mucho pero mucho más lo vas a tener al alcance de tu mano.",
    'en' : "All of this, and much, much more, will be within your reach."
  }

  const texto2 = {
    'es' : "Instalá la aplicación y accedé en segundos.",
    'en' : "Install the application and access it within seconds."
  }

   
    const features = [
      {
        id: 1,
        name: {
          'es': 'Hotelería',
          'en': 'Accommodation',
        },
        description: {
          'es': '¿Buscás algún lugar para dormir? Elegí el tipo de alojamiento que más se adapte a tu interés. Encontrarás departamentos, hosterías, hostales, campings, refugios y más.',
          'en': 'Looking for a place to sleep? Choose the type of accommodation that best suits your interest. You will find apartments, lodges, hostels, campgrounds, shelters, and more.',
        },
        icon: HomeModernIcon,
      },
      {
        id: 2,
        name: {
          'es': 'Gastronomía',
          'en': 'Dining',
        },
        description: {
          'es': '¿No sabés dónde comer? Elegí entre restaurantes, parrillas, rotiserías, fábrica de pastas, vegetarianos, veganos, y más.',
          'en': 'Don\'t know where to eat? Choose from restaurants, grills, rotisseries, pasta factories, vegetarian, vegan, and more.',
        },
        icon: BuildingStorefrontIcon,
      },
      {
        id: 3,
        name: {
          'es': 'Transportes',
          'en': 'Transportation',
        },
        description: {
          'es': '¿Querés saber cómo viajar desde y hacia El Chaltén? Hay distintos tipos de transporte, buses regulares, servicios puerta a puerta, remises, etc.',
          'en': 'Want to know how to travel to and from El Chaltén? There are different types of transportation, regular buses, door-to-door services, taxis, etc.',
        },
        icon: TruckIcon,
      },
      {
        id: 4,
        name: {
          'es': 'Tiendas',
          'en': 'Stores',
        },
        description: {
          'es': '¿Precisás comprar algún recuerdo, una prenda, artesanías, o algo rico para regalar o regalarte? Pasá por nuestra sección de tiendas y encontrá lo que estabas buscando.',
          'en': 'Need to buy a souvenir, clothing, crafts, or something delicious to gift or treat yourself? Check out our shops section and find what you were looking for.',
        },
        icon: GiftIcon,
      },
      {
        id: 5,
        name: {
          'es': "Eventos",
          'en': "Events",
        },
        description: {
          'es': "No te pierdas ningún Evento, chequeá nuestra agenda!",
          'en': "Don't miss any events, check our agenda!",
        },
        icon: CalendarDaysIcon,
      },
      {
        id: 6,
        name: {
          'es': 'Trekking',
          'en': 'Trekking',
        },
        description: {
          'es': 'Obtené información de los principales senderos dentro del Parque Nacional',
          'en': 'Get information about the main trails within the National Park.',
        },
        icon: MapIcon,
      },
      {
        id: 7,
        name: {
          'es': 'Artistas',
          'en': 'Artists',
        },
        description: {
          'es': 'Conocé a los y las artistas que nutren de cultura a nuestro pueblo.',
          'en': 'Meet the artists who enrich our town with culture.',
        },
        icon: StarIcon,
      },
      {
        id: 8,
        name: {
          'es': "ONG's y ORG's",
          'en': "ONG'S & ORG'S",
        },
        description: {
          'es': 'Descubrí las Organizaciones que funcionan en El Chaltén.',
          'en': 'Learn about the organizations operating in El Chaltén.',
        },
        icon: UserGroupIcon,
      }
    
  ];

  return (
    <>
      <div className="h-auto py-24 sm:py-32 bg-SectionBg" ref={ref}>
        <motion.div
          className="flex items-center justify-center flex-col  px-6 lg:px-8 "
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : "-50%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className=" max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Info Chalten
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {titulo[idiomaActual]}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {descripcion[idiomaActual]}
            </p>
          </div>

          <div
            className=" mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.id} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name[idiomaActual]}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description[idiomaActual]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className=" max-w-2xl lg:text-center">
            <p className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {texto1[idiomaActual]}
            </p>
            <p className="mt-6 text-xl leading-8 font-medium text-gray-600">
              {texto2[idiomaActual]}
            </p>
          </div>
        </motion.div>
      </div>

    </>
  );
};


export default AppSection;