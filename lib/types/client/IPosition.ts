export interface IPosition {
  title: string;
  startDate: Date;
  endDate?: Date;
}

export interface IPositionRaw {
  title: string;
  startDate: string;
  endDate?: string;
}
