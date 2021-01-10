import React, { useState } from 'react';
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

export const ApplicationStages = ({ data }: Props) => {
  const [applications, setApplications] = useState(data);

  return (
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
  );
};
