export interface Application {
  _id: number;
  companyName: string;
  status: string;
  notes: string;
  interviewDate: string;
  interviewTime: string;
}

export const ApplicationType = {
  APPLICATION: "application",
};
