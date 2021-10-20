import { IExperience } from './IExperience';
import { ISkill } from './ISkill';
import { ISoftware } from './ISoftware';

export interface ICaseStudy {
  experience: IExperience;
  skills: ISkill[];
  softwares: ISoftware[];
  caseStudy: string;
}
