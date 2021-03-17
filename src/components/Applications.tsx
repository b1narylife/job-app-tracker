import app from "next/app";
import React, { useState } from "react";
import { Application } from "../utils/application";
import { ApplicationItem } from "./ApplicationItem";
import { DropZone } from "./DropZone";

interface Props {
  data: Application[];
}

const stages: Array<string> = [
  "Prospective",
  "Applied",
  "Interviewing",
  "Outcome",
];

export const Applications = ({ data }: Props) => {
  const [applications, setApplications] = useState(data);

  const addApplication = () => {
    console.log("You clicked Add application");
  };

  const updateApplication = (_id: number) => {
    const application = applications.filter(
      (application) => application._id === _id
    );

    const activeDropZone = document.getElementsByClassName("active");
    application[0].status = activeDropZone[0].id;

    setApplications(
      applications
        .filter((application) => application._id !== _id)
        .concat(application[0])
    );
  };

  const deleteApplication = (_id: number) => {
    const application = applications.filter(
      (application) => application._id === _id
    );

    let confirmation = confirm(
      `Are you sure you want to delete the application for: ${application[0].companyName} ?`
    );

    if (confirmation) {
      setApplications(
        applications.filter((application) => application._id !== _id)
      );
    }
  };

  return (
    <div className="applications-wrapper static grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto py-3 px-2 lg:px-0">
      {stages.map((stage) => (
        <div
          className="application-card h-60 border border-2 border-current shadow-2xl p-3"
          key={stage}
        >
          <div className="card-header flex justify-between items-center border-b-2 border-current pb-2">
            <p className="card-title capitalize mb-0">{`${stage} (${
              applications.filter((application) =>
                application.status.includes(stage)
              ).length
            })`}</p>
            {/* <button className="add-application" onClick={addApplication}>
              +
            </button> */}
          </div>
          <div className="card-body h-full">
            <DropZone id={stage} updateApplication={updateApplication}>
              {applications
                .filter((application) => application.status.includes(stage))
                .map((application) => (
                  <ApplicationItem
                    key={application._id}
                    application={application}
                    deleteApplication={deleteApplication}
                  />
                ))}
            </DropZone>
          </div>
        </div>
      ))}
    </div>
  );
};
