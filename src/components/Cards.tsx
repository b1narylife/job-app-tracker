import React from 'react';

import { Card } from './Card';

export function Cards({ applications }: any) {
  const cards = [
    'prospective',
    'applied',
    'interviewing',
    'outcome',
    'feedback',
  ];

  return (
    <div className="cards-wrapper flex flex-wrap justify-between">
      {cards.map((card) => (
        <div key={card}>
          <Card title={card} applications={applications} />
        </div>
      ))}
    </div>
  );
}
