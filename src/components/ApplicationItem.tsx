import React from "react";
import { useDrag } from "react-dnd";
import { Application, ApplicationType } from "../utils/application";

import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";

interface Props {
  application: Application;
}

export const ApplicationItem = ({ application }: Props) => {
  const { isModalOpen, openModal, closeModal } = useModal();
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
        <button className="mx-2" onClick={openModal}>
          <small>Edit</small>
        </button>
        <button className="mx-2 text-red-500">
          <small>Delete</small>
        </button>
      </div>
      <>
        <Modal
          id="applicationModal"
          isOpen={isModalOpen}
          transition={ModalTransition.SCALE}
        >
          <p className="text-center">
            <strong>{application.companyName}</strong>
          </p>
          <div className="container mx-auto flex flex-col">
            <p className="mt-3">{`Application status: ${application.status}`}</p>

            <button className="ml-auto" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      </>
    </div>
  );
};
