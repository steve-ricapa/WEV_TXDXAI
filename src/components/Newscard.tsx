import React from 'react';
import type { News } from '../types/News';
import { formatDate } from '../utils/formatDate';

interface NewsCardProps {
  item: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{formatDate(item.date)}</p>
      <p className="text-gray-800">{item.summary}</p>
    </div>
  );
};

export default NewsCard;
