import type { NextApiRequest, NextApiResponse } from "next";

const applications = [
  {
    _id: 0,
    companyName: "Burger King",
    status: "Prospective",
    notes: "",
    interviewDate: null,
    interviewTime: null,
  },
  {
    _id: 1,
    companyName: "KFC",
    status: "Applied",
    notes: "My interview is with Kevin and Macey.",
    interviewDate: "03/04/2021",
    interviewTime: "14:00",
  },
  {
    _id: 2,
    companyName: "McDonalds",
    status: "Interviewing",
    notes: "",
    interviewDate: "02/02/2021",
    interviewTime: "10:00",
  },
  {
    _id: 3,
    companyName: "Subway",
    status: "Outcome",
    notes: "",
    interviewDate: "05/01/5021",
    interviewTime: "15:30",
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(applications);
};
