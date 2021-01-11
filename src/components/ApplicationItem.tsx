import React from 'react';
import { useDrag } from 'react-dnd';
import { Application, ApplicationType } from '../utils/application';

interface Props {
  application: Application;
}

export const ApplicationItem = ({ application }: Props) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ApplicationType.APPLICATION,
      id: application._id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="application-item cursor-pointer my-2" ref={drag}>
      <p className={isDragging ? 'text-red-500' : ''}>
        {application.companyName}
      </p>
    </div>
  );
};
