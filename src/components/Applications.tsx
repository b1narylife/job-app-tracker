import React, { createContext, useState } from 'react';
import { Application } from '../utils/application';
import { ApplicationItem } from './ApplicationItem';
import { DropZone } from './DropZone';

interface Props {
  data: Application[];
}

const stages = [
  'prospective',
  'applied',
  'interviewing',
  'outcome',
  'feedback',
];

export const ApplicationContext = createContext({
  updateStatus: null as any, // look into correct typing here
});

export const Applications = ({ data }: Props) => {
  const [applications, setApplications] = useState(data);

  const updateStatus = (_id: number) => {
    const application = applications.filter(
      (application) => application._id === _id,
    );

    application[0].status = '';

    setApplications(
      applications
        .filter((application) => application._id !== _id)
        .concat(application[0]),
    );
  };

  return (
    <ApplicationContext.Provider value={{ updateStatus }}>
      <div className="applications-wrapper flex flex-wrap justify-between">
        {stages.map((stage) => (
          <div
            className="application-card w-72 lg:w-60 border border-2 border-current shadow-2xl my-2 mx-auto p-2"
            key={stage}
          >
            <div className="card-title flex justify-between border-b-2 border-current">
              <p className="capitalize mb-2">{stage}</p>
              <p>
                {
                  applications.filter((application) =>
                    application.status.includes(stage),
                  ).length
                }
              </p>
            </div>
            <div className="card-body">
              <DropZone>
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
    </ApplicationContext.Provider>
  );
};
