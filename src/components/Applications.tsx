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

  return (
    <div className="applications-wrapper flex flex-wrap justify-between">
      {stages.map((stage) => (
        <div
          className="application-card w-72 lg:w-60 border border-2 border-current shadow-2xl my-2 mx-auto p-2"
          key={stage}
        >
          <div className="card-header flex justify-between items-center border-b-2 border-current pb-2">
            <p className="card-title capitalize mb-0">{`${stage} (${
              applications.filter((application) =>
                application.status.includes(stage)
              ).length
            })`}</p>
            <button className="add-application">+</button>
          </div>
          <div className="card-body">
            <DropZone id={stage} updateApplication={updateApplication}>
              {applications
                .filter((application) => application.status.includes(stage))
                .map((application) => (
                  <ApplicationItem
                    key={application._id}
                    application={application}
                  />
                ))}
            </DropZone>
          </div>
        </div>
      ))}
    </div>
  );
};
