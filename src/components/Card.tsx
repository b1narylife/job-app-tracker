import React from 'react';

import { Application } from './Application';

interface Card {
  title: string;
  applications: any;
}

export function Card({ title, applications }: Card) {
  return (
    <div className="card w-72 my-3 mx-auto py-3 border-current border-2 shadow-2xl">
      <div className="card-header flex justify-between px-3 mb-3">
        <h1 className="card-title capitalize">{title}</h1>
        <button className="add-task mx-3">
          <span role="img">➕</span>
        </button>
      </div>
      <div className="card-body">
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
