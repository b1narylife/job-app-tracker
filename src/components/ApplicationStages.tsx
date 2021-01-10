import React from 'react';
import { ApplicationStage } from './ApplicationStage';

interface Props {
  data: [];
}

export const ApplicationStages = ({ data }: Props) => {
  const stages = [
    'prospective',
    'applied',
    'interviewing',
    'outcome',
    'feedback',
  ];

  return (
    <div className="application-stages-wrapper flex flex-wrap justify-between">
      {stages.map((stage) => (
        <ApplicationStage
          key={stage}
          stageTitle={stage}
          applicationData={data.filter((application: any) =>
            application.status.includes(stage),
          )}
        />
      ))}
    </div>
  );
};
