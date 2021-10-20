import { gql } from 'graphql-request';

export const getSkillsByType = gql`
  query MySkills($type: SkillType) {
    skills(where: { type: $type }) {
      name
      level
    }
  }
`;
