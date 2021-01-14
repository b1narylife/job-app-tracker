import { ReactNode, useContext } from 'react';
import React, {DragObjectWithType, useDrop} from 'react-dnd';
import { ApplicationType } from '../utils/application';
import { ApplicationContext } from './Applications';

interface Props {
  children: ReactNode;
}

interface Item extends DragObjectWithType {
  id: number;
}

export const DropZone = ({ children }: Props) => {
  const { updateStatus } = useContext(ApplicationContext);

  const [{ isOver }, drop] = useDrop({
    accept: ApplicationType.APPLICATION,
    drop: (item: Item) => updateStatus(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={
        isOver
          ? 'bg-gray-300 application-drop-zone pb-8'
          : 'application-drop-zone pb-8'
      }
    >
      {children}
    </div>
  );
};
