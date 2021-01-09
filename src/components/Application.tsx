import React from 'react';

interface Application {
  companyName: string;
  status: string;
}

export function Application({ companyName, status }: Application) {
  return (
    <div className="application cursor-pointer">
      <h2>{companyName}</h2>
    </div>
  );
}
