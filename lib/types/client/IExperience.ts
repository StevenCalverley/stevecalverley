import { ClientDate } from '..';
import { ICompany } from './ICompany';
import { IPosition } from './IPosition';

export interface IExperience {
  startDate: ClientDate;
  endDate?: ClientDate;
  company: ICompany;
  positions: IPosition[];
  responsibilities: string[];
}

export interface IExperienceResponse {
  experiences: IExperience[];
}
