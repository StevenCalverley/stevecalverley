import { IExperienceRaw, IExperience } from '../lib/types';
import { parsePositions } from './parsePositionsResponse';

export function parseExperienceResponse(
  experiences: IExperienceRaw[]
): IExperience[] {
  const parsedExperiences: IExperience[] = experiences.map(
    (experience: IExperienceRaw): IExperience => {
      const parsedPostions = parsePositions(experience.positions);

      return {
        company: experience.company,
        positions: parsedPostions,
        responsibilities: experience.responsibilities,
      };
    }
  );

  return parsedExperiences;
}
