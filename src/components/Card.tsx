import React from 'react';

interface Card {
  title: string;
}

export function Card({ title }: Card) {
  return (
    <div className="card w-60 my-3 p-3 border-current border-2">
      <h1 className="capitalize text-center">{title}</h1>
    </div>
  );
}
