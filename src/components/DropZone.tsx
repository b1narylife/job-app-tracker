import { ReactNode, useContext } from 'react';
import React, { useDrop } from 'react-dnd';
import { ApplicationType } from '../utils/application';
import { ApplicationContext } from './Applications';

interface Props {
  children: ReactNode;
}

export const DropZone = ({ children }: Props) => {
  const { updateStatus } = useContext(ApplicationContext);

  const [{ isOver }, drop] = useDrop({
    accept: ApplicationType.APPLICATION,
    drop: (item, monitor) => updateStatus(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      className={
        isOver
          ? 'bg-gray-300 application-drop-zone pb-8'
          : 'application-drop-zone pb-8'
      }
      ref={drop}
    >
      {children}
    </div>
  );
};
