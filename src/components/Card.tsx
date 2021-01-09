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
      status: 'prospective',
    },
    {
      id: 2,
      companyName: 'City Council',
      status: 'interviewing',
    },
    {
      id: 3,
      companyName: 'Argos',
      status: 'applied',
    },
    {
      id: 4,
      companyName: 'Homebargains',
      status: 'applied',
    },
    {
      id: 5,
      companyName: 'Morrisons',
      status: 'outcome',
    },
    {
      id: 6,
      companyName: 'Kiers',
      status: 'interviewing',
    },
    {
      id: 7,
      companyName: 'Amazon',
      status: 'feedback',
    },
    {
      id: 8,
      companyName: 'Deliveroo',
      status: 'feedback',
    },
  ];

  return (
    <div className="card w-72 my-3 mx-auto py-3 border-current border-2 shadow-2xl">
      <div className="card-header flex justify-between px-3 mb-3">
        <h1 className="card-title capitalize">{title}</h1>
        <button className="add-task mx-3">
          <span role="img">➕</span>
        </button>
      </div>
      <div className="card-body">
        {/* {applications.map((application) => (
          <div className="py-2 px-3 hover:opacity-50" key={application.id}>
            <Application
              companyName={application.companyName}
              status={application.status}
            />
          </div>
        ))} */}
        {applications
          .filter((application) => application.status.includes(title))
          .map((item) => (
            <div className="py-2 px-3 hover:opacity-50" key={item.id}>
              <Application
                companyName={item.companyName}
                status={item.status}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
