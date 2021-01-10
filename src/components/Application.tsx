import React from 'react';

interface Props {
  companyName: string;
}

export const Application = ({ companyName }: Props) => {
  return (
    <div className="application my-1">
      <p>{companyName}</p>
    </div>
  );
};
