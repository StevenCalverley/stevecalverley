import { ISkill } from '../../lib/types';

interface SkillProps {
  skill: ISkill;
}
export default function Skill({ skill }: SkillProps) {
  const { name, level, type } = skill;
  return (
    <div className="grid md:grid-cols-2 items-center">
      <p>{name}</p>
      <div className="bg-yellow-400 h-2">
        <div className="bg-blue-900 h-2" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}
