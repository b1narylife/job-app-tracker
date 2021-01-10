import React, { createContext, useState } from 'react';
import { ApplicationStage } from './ApplicationStage';

interface Props {
  data: [];
}

const stages = [
  'prospective',
  'applied',
  'interviewing',
  'outcome',
  'feedback',
];

export const ApplicationContext = createContext({
  updateStatus: null as any,
});

export const ApplicationStages = ({ data }: Props) => {
  const [applications, setApplications] = useState(data);

  const updateStatus = (_id: number) => {
    console.log(_id);
  };

  return (
    <ApplicationContext.Provider value={{ updateStatus }}>
      <div className="application-stages-wrapper flex flex-wrap justify-between">
        {stages.map((stage) => (
          <ApplicationStage
            key={stage}
            stageTitle={stage}
            applicationData={applications.filter((application: any) =>
              application.status.includes(stage),
            )}
          />
        ))}
      </div>
    </ApplicationContext.Provider>
  );
};
