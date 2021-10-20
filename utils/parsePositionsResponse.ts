import { IPosition, IPositionRaw } from '../lib/types/client/IPosition';

export function parsePositions(positions: IPositionRaw[]): IPosition[] {
  return positions.map((position) => {
    console.log(new Date(position.startDate));
    return {
      title: position.title,
      startDate: new Date(position.startDate),
      endDate: position.endDate ? new Date(position.endDate) : undefined,
    };
  });
}
