import React from 'react';
import { useDrag } from 'react-dnd';
import { ApplicationTypes } from '../utils/applications';

interface Props {
  companyName: string;
}

export const Application = ({ companyName }: Props) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ApplicationTypes.APPLICATION,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="application my-1 cursor-pointer" ref={drag}>
      <p>{companyName}</p>
    </div>
  );
};
