import { IPosition, IPositionRaw } from '../lib/types/client/IPosition';

export function parsePositions(positions: IPosition[]): IPosition[] {
  return positions.map((position) => {
    return {
      title: position.title,
      startDate: new Date(position.startDate as string),
      endDate: position.endDate ? new Date(position.endDate) : undefined,
    };
  });
}
