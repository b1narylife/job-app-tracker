import { ReactNode, useContext } from "react";
import React, { DragObjectWithType, useDrop } from "react-dnd";
import { ApplicationType } from "../utils/application";

interface Props {
  id: string;
  children: ReactNode;
  updateStatus: (_id: number) => void;
}

interface Item extends DragObjectWithType {
  id: number;
}

export const DropZone = ({ id, children, updateStatus }: Props) => {
  const [{ isOver }, drop] = useDrop({
    accept: ApplicationType.APPLICATION,
    options: { shallow: true },
    drop: (item: Item) => updateStatus(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      id={id}
      className={
        isOver
          ? "active application-drop-zone pb-8 bg-gray-300"
          : "application-drop-zone pb-8"
      }
    >
      {children}
    </div>
  );
};
