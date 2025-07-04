import React from 'react';
import type { News } from '../types/News';
import { formatDate } from '../utils/formatDate';

interface NewsCardProps {
  item: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => (
  <div className="w-64 flex-shrink-0 bg-white rounded-lg shadow p-4 flex flex-col">
    {item.image && (
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-32 object-cover rounded mb-2"
      />
    )}
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
    <p className="text-gray-600 text-sm mb-2">{formatDate(item.date)}</p>
    <p className="text-gray-800 flex-1">{item.summary}</p>
    <div className="mt-4">
      <a
        href={item.id}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 hover:underline"
      >
        Ver más
      </a>
    </div>
  </div>
);

export default NewsCard;
