import React, { useState } from 'react';
import NewsCard from '../../components/Newscard';
import type { News } from '../../types/News';
import { useNews } from '../../hooks/useNews';
import { useExternalNews } from '../../hooks/useExternalNews';
import { useAuth } from '../../hooks/useAuth';

const slidesData = [
  {
    id: 1,
    image: 'https://forbes.es/wp-content/uploads/2023/07/robor-ordenador-inteligencia-artificial.jpg',
    title: 'VictorIA',
    description: 'Queda muy poco para que VictorIA sea la mejor IA del mundo',
  },
  {
    id: 2,
    image: 'https://img.channelpartner.es/wp-content/uploads/2024/11/19124251/agentes-inteligentes-de-IA-buena.jpg.webp',
    title: 'SophIA',
    description: 'SophIA ayuda a más de 10 mil clientes al día',
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/12/800/600',
    title: 'App Ref 1',
    description: 'Referencias a la app',
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/13/800/600',
    title: 'App Ref 2',
    description: 'Referencias a la app',
  },
];

const Home: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { news: internalNews, loading: intLoading, error: intError } = useNews();
  const { news: externalNews, loading: extLoading, error: extError } = useExternalNews();

  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleSlides = 3;

  const nextSlide = () => {
    if (currentSlide < slidesData.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-blue-100 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        {isAuthenticated && (
          <div className="flex justify-end mb-4">
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cerrar sesión
            </button>
          </div>
        )}

        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a XOC</h1>
        <p className="mb-6 text-gray-700 text-lg">
          XOC (Xtreme Operations Center) es tu centro de operaciones de ciberseguridad:
          aquí monitorizamos amenazas, gestionamos tickets de incidentes y contamos con agentes
          automatizados que asisten en la detección y respuesta.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Novedades de XOC</h2>
          {intLoading && <p className="text-gray-600">Cargando novedades internas...</p>}
          {intError && <p className="text-red-600">Error: {intError}</p>}
          {!intLoading && !intError && Array.isArray(internalNews) && internalNews.map(item => (
            <div key={item.id} className="flex items-start gap-4 bg-gray-50 rounded-lg shadow p-4 mb-5">
              <div className="flex-1">
                <NewsCard item={item} />
              </div>
            </div>
          ))}

          {/* React Carousel directly after Novedades */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Explora más de XOC</h2>
            <div className="relative overflow-hidden bg-transparent">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}
              >
                {slidesData.map((slide) => (
                  <div key={slide.id} className="w-full md:w-1/3 flex-shrink-0 px-2 py-4">
                    <div className="overflow-hidden h-full">
                      <div className="bg-gray-200 h-48 md:h-64 flex items-center justify-center">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold">{slide.title}</h3>
                        <p className="text-gray-600 mt-2">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= slidesData.length - visibleSlides}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Noticias de Ciberseguridad</h2>
          {extLoading && <p className="text-gray-600">Cargando noticias externas...</p>}
          {extError && <p className="text-red-600">Error: {extError}</p>}
          {!extLoading && !extError && externalNews.map((article, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow p-5 mb-5 hover:shadow-md transition"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-700 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{article.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;