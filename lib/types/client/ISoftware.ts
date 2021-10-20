enum SoftwareType {
  FRONTEND = 'FrontEnd',
  BACKEND = 'BackEnd',
  DEVOPS = 'DevOps',
}

export interface ISoftware {
  name: string;
  level: number;
  type: SoftwareType;
}
