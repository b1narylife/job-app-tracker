import type { NextApiRequest, NextApiResponse } from 'next';

const applications = [
  {
    _id: 0,
    companyName: 'Burger King',
    status: 'Prospective',
  },
  {
    _id: 1,
    companyName: 'KFC',
    status: 'Applied',
  },
  {
    _id: 2,
    companyName: 'McDonalds',
    status: 'Interviewing',
  },
  {
    _id: 3,
    companyName: 'Subway',
    status: 'Outcome',
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(applications);
};
