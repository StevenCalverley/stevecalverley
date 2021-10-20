import { ClientDate } from '..';

export interface IEducation {
  title: string;
  startDate: ClientDate;
  endDate?: ClientDate;
  institution: string;
  summary: string;
}

export interface IEducationResponse {
  educations: IEducation[];
}
