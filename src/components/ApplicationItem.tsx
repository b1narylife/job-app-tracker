import React from "react";
import { useDrag } from "react-dnd";
import { Application, ApplicationType } from "../utils/application";

import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";

interface Props {
  application: Application;
  deleteApplication: any;
}

export const ApplicationItem = ({ application, deleteApplication }: Props) => {
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
          <small>View</small>
        </button>
        <button
          className="mx-2 text-red-500"
          onClick={() => {
            deleteApplication(application._id);
          }}
        >
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
          <div className="container mx-auto mt-3  flex flex-col">
            <div className="flex flex-row items-center justify-between">
              <p>{`Status: ${application.status}`}</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="mt-3">{`Interview Date: ${
                application.interviewDate === null
                  ? `N/A`
                  : `${application.interviewDate}`
              }`}</p>
              <p className="mt-3">{`Interview Time: ${
                application.interviewTime === null
                  ? `N/A`
                  : `${application.interviewTime}`
              }`}</p>
              <p className="mt-3">{`Notes: ${application.notes}`}</p>
            </div>

            <button className="absolute bottom-5 right-8" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      </>
    </div>
  );
};
