import React from 'react';

import { Card } from './Card';

export function Cards() {
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
        <Card key={card} title={card} />
      ))}
    </div>
  );
}
