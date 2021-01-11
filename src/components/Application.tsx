import React from 'react';
import { useDrag } from 'react-dnd';
import { ApplicationType } from '../utils/application';

interface Props {
  id: number;
  companyName: string;
}

export const Application = ({ id, companyName }: Props) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ApplicationType.APPLICATION,
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
