import { ICompany } from './ICompany';
import { IPosition, IPositionRaw } from './IPosition';

export interface IExperience {
  company: ICompany;
  positions: IPosition[];
  responsibilities: string[];
}

export interface IExperienceRaw {
  company: ICompany;
  positions: IPositionRaw[];
  responsibilities: string[];
}

export interface IExperienceResponse {
  experiences: IExperienceRaw[];
}
