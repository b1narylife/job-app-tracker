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
      <Card title="prospective" />
      <Card title="applied" />
      <Card title="interviewing" />
      <Card title="outcome" />
      <Card title="feedback" />
    </div>
  );
}
