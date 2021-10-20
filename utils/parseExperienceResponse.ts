import { IExperience } from '../lib/types';
import { parsePositions } from './parsePositionsResponse';

export function parseExperienceResponse(
  experiences: IExperience[]
): IExperience[] {
  const parsedExperiences: IExperience[] = experiences.map(
    (experience: IExperience): IExperience => {
      const parsedPostions = parsePositions(experience.positions);

      return {
        startDate: new Date(experience.startDate as string),
        endDate: experience.endDate
          ? new Date(experience.startDate as string)
          : null,
        company: experience.company,
        positions: parsedPostions,
        responsibilities: experience.responsibilities,
      };
    }
  );

  return parsedExperiences;
}
