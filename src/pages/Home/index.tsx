import React from 'react';
import NewsCard from '../../components/Newscard';
import type { News } from '../../types/News';
import { useNews } from '../../hooks/useNews';
import { useExternalNews } from '../../hooks/useExternalNews';
import { useAuth } from '../../hooks/useAuth';

const Home: React.FC = () => {
  // Auth state
  const { isAuthenticated, logout } = useAuth();

  // Internal news
  const { news: internalNews, loading: intLoading, error: intError } = useNews();
  // External cybersecurity news
  const { news: externalNews, loading: extLoading, error: extError } = useExternalNews();

  return (
    <div className="p-6">
      {/* Header with logout */}
      {isAuthenticated && (
        <div className="flex justify-end">
          <button
            onClick={logout}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Cerrar sesión
          </button>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-4">Bienvenido a XOC</h1>
      <p className="mb-6 text-gray-700">
        XOC (Xtreme Operations Center) es tu centro de operaciones de ciberseguridad:
        aquí monitorizamos amenazas, gestionamos tickets de incidentes y contamos con agentes
        automatizados que asisten en la detección y respuesta.
      </p>

      {/* Internal News */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Novedades de XOC</h2>
        {intLoading && <p>Cargando novedades internas...</p>}
        {intError && <p className="text-red-600">Error: {intError}</p>}
        {!intLoading && !intError && Array.isArray(internalNews) && internalNews.map(item => (
          <NewsCard key={item.id} item={item} />
        ))}
      </section>

      {/* External Cybersecurity News */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Noticias de Ciberseguridad</h2>
        {extLoading && <p>Cargando noticias externas...</p>}
        {extError && <p className="text-red-600">Error: {extError}</p>}
        {!extLoading && !extError && externalNews.map((article, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 mb-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline">
              {article.title}
            </a>
            <p className="text-gray-600 text-sm mb-2">{new Date(article.publishedAt).toLocaleDateString()}</p>
            <p className="text-gray-800">{article.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
