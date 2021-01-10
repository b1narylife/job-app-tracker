import React from 'react';
import { useDrag } from 'react-dnd';
import { ApplicationTypes } from '../utils/applications';

interface Props {
  id: number;
  companyName: string;
}

export const Application = ({ id, companyName }: Props) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ApplicationTypes.APPLICATION,
      id: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className={
        isDragging
          ? 'application my-3 cursor-pointer text-red-500'
          : 'application my-3 cursor-pointer'
      }
      ref={drag}
    >
      <p>{companyName}</p>
    </div>
  );
};
