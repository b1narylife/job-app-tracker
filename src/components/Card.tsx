import React from 'react';

import { Application } from './Application';

interface Card {
  title: string;
  applications: any;
}

export function Card({ title, applications }: Card) {
  return (
    <div className="card w-72 lg:w-60 my-3 mx-auto py-3 border-current border-2 shadow-2xl">
      <div className="card-header flex justify-between border-current border-b-2 pb-3 px-3 mb-3">
        <h1 className="card-title capitalize">{title}</h1>
        <p>
          {
            applications.filter((application: any) =>
              application.status.includes(title),
            ).length
          }
        </p>
      </div>
      <div className="card-body">
        {applications
          .filter((application: any) => application.status.includes(title))
          .map((item: any) => (
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
