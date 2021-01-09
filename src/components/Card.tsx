import React from 'react';

import { Application } from './Application';

interface Card {
  title: string;
}

export function Card({ title }: Card) {
  const applications = [
    {
      id: 1,
      companyName: 'B&Q',
    },
    {
      id: 2,
      companyName: 'City Council',
    },
    {
      id: 3,
      companyName: 'Argos',
    },
    {
      id: 4,
      companyName: 'Homebargains',
    },
    {
      id: 5,
      companyName: 'Morrisons',
    },
    {
      id: 6,
      companyName: 'Kiers',
    },
    {
      id: 7,
      companyName: 'Amazon',
    },
    {
      id: 8,
      companyName: 'Deliveroo',
    },
  ];

  return (
    <div className="card w-72 my-3 mx-auto p-3 border-current border-2 shadow-2xl">
      <div className="card-header flex justify-between mb-3">
        <h1 className="card-title capitalize">{title}</h1>
        <button className="add-task mx-3">
          <span role="img">➕</span>
        </button>
      </div>
      <div className="card-body">
        {applications.map((application, i) => (
          <div key={application.id}>
            <Application companyName={application.companyName} />
          </div>
        ))}
      </div>
    </div>
  );
}
