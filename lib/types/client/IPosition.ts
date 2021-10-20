import { ClientDate } from '..';

export interface IPosition {
  title: string;
  startDate: ClientDate;
  endDate?: ClientDate;
}

export interface IPositionRaw {
  title: string;
  startDate: string;
  endDate?: string;
}
