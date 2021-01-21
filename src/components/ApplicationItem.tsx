import React from "react";
import { useDrag } from "react-dnd";
import { Application, ApplicationType } from "../utils/application";

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
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className="application-item flex justify-between items-center cursor-pointer my-2"
      ref={drag}
    >
      <p className={isDragging ? "text-red-500 flex-1" : " flex-1"}>
        {application.companyName}
      </p>
      <div className="icons flex flex-1 justify-end">
        <button className="mx-1">
          <small>Notes</small>
        </button>
        <button className="mx-1">
          <small>Delete</small>
        </button>
      </div>
    </div>
  );
};
