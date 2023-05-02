enum SkillType {
  BUSINESS = 'Business',
  DEVELOPMENT = 'Development',
}

export interface ISkill {
  name: string;
  level: number;
  type: SkillType;
}

export interface ISkillResponse {
  skills: ISkill[];
}