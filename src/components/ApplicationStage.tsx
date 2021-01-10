import React from 'react';
import { useDrop } from 'react-dnd';

import { Application } from './Application';
import { ApplicationTypes } from '../utils/applications';

interface Props {
  stageTitle: string;
  applicationData: any;
}

export const ApplicationStage = ({ stageTitle, applicationData }: Props) => {
  const [{ isOver }, drop] = useDrop({
    accept: ApplicationTypes.APPLICATION,
    drop: (item, monitor) => console.log(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className="application-stage w-72 lg:w-60 h-40 my-3 mx-auto py-3 border-current border-2 shadow-2xl">
      <div className="application-stage-header flex justify-between border-current border-b-2 pb-3 px-3">
        <h1>{stageTitle}</h1>
        <p>
          {
            applicationData.filter((application: any) =>
              application.status.includes(stageTitle),
            ).length
          }
        </p>
      </div>
      <div
        className={
          isOver
            ? 'application-stage-body px-3 h-full'
            : 'application-stage-body px-3 h-full'
        }
        ref={drop}
      >
        {applicationData.map((application: any) => (
          <div key={application.companyName}>
            <Application
              id={application._id}
              companyName={application.companyName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
