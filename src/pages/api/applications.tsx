import type { NextApiRequest, NextApiResponse } from 'next';

const applications = [
  {
    id: 1,
    companyName: 'B&Q',
    status: 'prospective',
  },
  {
    id: 2,
    companyName: 'City Council',
    status: 'interviewing',
  },
  {
    id: 3,
    companyName: 'Argos',
    status: 'applied',
  },
  {
    id: 4,
    companyName: 'Homebargains',
    status: 'applied',
  },
  {
    id: 5,
    companyName: 'Morrisons',
    status: 'outcome',
  },
  {
    id: 6,
    companyName: 'Kiers',
    status: 'interviewing',
  },
  {
    id: 7,
    companyName: 'Amazon',
    status: 'feedback',
  },
  {
    id: 8,
    companyName: 'Deliveroo',
    status: 'feedback',
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(applications);
};
