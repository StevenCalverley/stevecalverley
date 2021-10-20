import { ISkill } from '../../lib/types/client/ISkill';
import Skill from './skill';

interface SkillsProps {
  skills: {
    business: ISkill[];
    development: ISkill[];
  };
}

export default function Skills({ skills }: SkillsProps): JSX.Element {
  return (
    <section className="px-4 py-8 bg-white font-display">
      <div className="mx-auto max-w-5xl md:py-8 text-blue-900">
        <h2 className="font-bold text-xl text-center text-blue-900">
          Hard and Soft ,<br />
          &lt;Skills &#47;&gt;
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-x-16">
          <div className="space-y-4">
            {skills.development.map((skill, idx) => (
              <Skill key={idx} skill={skill} />
            ))}
          </div>
          <div className="mt-4 md:mt-0 space-y-4">
            {skills.business.map((skill, idx) => (
              <Skill key={idx} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}