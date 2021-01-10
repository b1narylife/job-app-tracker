import React from 'react';
import { Application } from './Application';

interface Props {
  stageTitle: string;
  applicationData: any;
}

export const ApplicationStage = ({ stageTitle, applicationData }: Props) => {
  return (
    <div className="application-stage w-72 lg:w-60 my-3 mx-auto py-3 border-current border-2 shadow-2xl">
      <div className="application-stage-header flex justify-between border-current border-b-2 pb-3 px-3 mb-3">
        <h1>{stageTitle}</h1>
        <p>
          {
            applicationData.filter((application: any) =>
              application.status.includes(stageTitle),
            ).length
          }
        </p>
      </div>
      <div className="application-stage-body px-3">
        {applicationData
          .filter((application: any) => application.status.includes(stageTitle))
          .map((application: any) => (
            <div key={application.companyName}>
              <Application companyName={application.companyName} />
            </div>
          ))}
      </div>
    </div>
  );
};
