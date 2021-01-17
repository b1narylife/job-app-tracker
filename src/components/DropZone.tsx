import { ReactNode, useContext } from "react";
import React, { DragObjectWithType, useDrop } from "react-dnd";
import { ApplicationType } from "../utils/application";

interface Props {
  id: string;
  children: ReactNode;
  updateApplication: (_id: number) => void;
}

interface Item extends DragObjectWithType {
  id: number;
}

export const DropZone = ({ id, children, updateApplication }: Props) => {
  const [{ isOver }, drop] = useDrop({
    accept: ApplicationType.APPLICATION,
    options: { shallow: true },
    drop: (item: Item) => updateApplication(item.id),
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
