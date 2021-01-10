import type { NextApiRequest, NextApiResponse } from 'next';

const applications = [
  {
    _id: 1,
    companyName: 'B&Q',
    status: 'prospective',
  },
  {
    _id: 2,
    companyName: 'City Council',
    status: 'interviewing',
  },
  {
    _id: 3,
    companyName: 'Argos',
    status: 'applied',
  },
  {
    _id: 4,
    companyName: 'Homebargains',
    status: 'applied',
  },
  {
    _id: 5,
    companyName: 'Morrisons',
    status: 'outcome',
  },
  {
    _id: 6,
    companyName: 'Kiers',
    status: 'interviewing',
  },
  {
    _id: 7,
    companyName: 'Amazon',
    status: 'feedback',
  },
  {
    _id: 8,
    companyName: 'Deliveroo',
    status: 'feedback',
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(applications);
};
