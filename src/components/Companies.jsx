import React from 'react';
import { Icon } from "@iconify/react";
import { useIdioma } from './IdiomaContext';

const Companies = () => {
  const { idiomaActual } = useIdioma();

  const titulo = {
    'es': '¿Querés que tu empresa aproveche los beneficios de InfoChalten?',
    'en': 'Would you like your company to take advantage of InfoChalten benefits?',
  };

  const descripcion = {
    'es': 'Aprovechá al máximo su presencia en InfoChalten! Al unirse a nuestra aplicación, tu empresa disfrutará de una serie de beneficios exclusivos diseñados para aumentar su visibilidad y conectividad con los clientes.',
    'en': 'Maximize your presence on InfoChalten! By joining our platform, your company will enjoy a range of exclusive benefits designed to increase its visibility and connectivity with customers.',
  };

  const caracteristicas = [
    {
      icono: "logos:whatsapp-icon",
      icono2: "skill-icons:instagram",
      icono3: "logos:chrome",
      titulo: {
        'es': 'Botones de contacto directo al WhatsApp, Instagram y página web',
        'en': 'Direct contact buttons to WhatsApp, Instagram, and website.',
      },
      descripcion: {
        'es': 'Optimizá la comunicación con tus clientes potenciales al incluir botones de contacto directo de WhatsApp en tu perfil de empresa. Esto permitirá a los usuarios comunicarse con vos de manera rápida y sencilla, maximizando las posibilidades de concretar las ventas.',
        'en': 'Facilitate communication with your potential customers by including direct WhatsApp contact buttons on your business profile. This will allow users to reach out to you quickly and easily, increasing the chances of generating sales and conversions.',
      },
    },

    {
      icono: "flat-color-icons:add-image",
      titulo: {
        'es': 'Logo de la empresa y Carrusel de Imágenes',
        'en': 'Company logo and Image Carousel',
      },
      descripcion: {
        'es': 'Presentá tu empresa de manera atractiva y visualmente impactante. Mostrá tus productos, servicios e instalaciones en una galería de imágenes que captará la atención de los usuarios y les ayudará a conocer mejor lo que tu empresa tiene para ofrecer.',
        'en': 'Showcase your company in an attractive and visually stunning way. Display your products, services, and facilities in an image gallery that will grab users attention and help them better understand what your company has to offer.',
      },
    },
    {
      icono: "openmoji:mobile-info",
      titulo: {
        'es': 'Información y descripción personalizada',
        'en': 'Customized information and description',
      },
      descripcion: {
        'es': 'Destacá las características únicas de tu empresa mediante la inclusión de información y descripciones personalizadas. Presentá tu historia, valores, servicios y cualquier otra información relevante de una manera clara y convincente, lo que ayudará a diferenciar tu empresa de la competencia y atraerá a clientes potenciales.',
        'en': 'Highlight the unique features of your company by including personalized information and descriptions. Present your story, values, services, and any other relevant information in a clear and compelling manner, which will help differentiate your company from the competition and attract potential customers.',
      },
    },
    {
      icono: "flat-color-icons:online-support",
      titulo: {
        'es': 'Soporte activo',
        'en': 'Active support',
      },
      descripcion: {
        'es': 'Contá con nuestro equipo de soporte activo para ayudarte en cualquier momento. Estamos aquí para responder a tus preguntas, resolver problemas y brindarte la asistencia que necesites para aprovechar al máximo tu experiencia en InfoChalten.',
        'en': 'Count on our active support team to assist you at any time. We are here to answer your questions, solve problems, and provide the assistance you need to make the most of your experience on InfoChalten.',
      },
    },
  ];

  return (
    <>
      <section className="flex items-center justify-center bg-comp" id="company">
        <div className="px-4 pt-52 mx-auto w-full sm:pt-20">
          <div className="flex flex-wrap">
            <div className="flex-1 pl-0 lg:pl-4 sm:pl-0">
              <div className="mb-12">
                <div className="relative ">
                  <h3 className="text-black text-3xl font-protest font-bold mb-4 text-center sm:-left-0 sm:top-0">
                    {titulo[idiomaActual]}
                  </h3>
                  <div className="flex m-auto w-24 mt-1 mb-10 overflow-hidden rounded">
                    <div className="flex-1 h-2 bg-orange-200"></div>
                    <div className="flex-1 h-2 bg-orange-400"></div>
                    <div className="flex-1 h-2 bg-orange-600"></div>
                  </div>
                </div>
                <p className="mb-16 text-xl text-black font-bold text-center w-1/2 mx-auto font-solitreo">
                  {descripcion[idiomaActual]}
                </p>
              </div>
              <div className="grid flex-1 grid-cols-4 gap-2 font-solitreo  pt-20  md:grid-cols-2 lg:grid-cols-2 sm:flex sm:flex-col sm:pt-0 sm:bg-right">
                {caracteristicas.map((caracteristica, index) => (
                  <div key={index} className="w-full p-8 text-center transition-all bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600 rounded shadow hover:shadow-lg" data-aos="fade-down">
                    <div className="flex flex-row items-center justify-center p-4 mb-4 rounded-full">
                      <Icon icon={caracteristica.icono} width={35} />
                      <Icon icon={caracteristica.icono2} width={35} className='mx-2' />
                      <Icon icon={caracteristica.icono3} width={35} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{caracteristica.titulo[idiomaActual]}</h3>
                    <p className="text-white mt-2">{caracteristica.descripcion[idiomaActual]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
