import React from 'react';

interface Application {
  companyName: string;
}

export function Application({ companyName }: Application) {
  return (
    <div className="application border-t-2 py-2">
      <h2>{companyName}</h2>
    </div>
  );
}
