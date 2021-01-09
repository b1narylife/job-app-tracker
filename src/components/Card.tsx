import React from 'react';

interface Card {
  title: string;
}

export function Card({ title }: Card) {
  return (
    <div className="card w-72 my-3 mx-auto p-3 border-current border-2 shadow-2xl">
      <div className="card-header flex justify-between">
        <h1 className="capitalize">{title}</h1>
        <button className="add-task mx-3">
          <span role="img">➕</span>
        </button>
      </div>
      <div className="card-body">
        {/* Applications will go here, draggable between cards as well as having the ability to be deleted. */}
      </div>
    </div>
  );
}
