import { Transition } from '@headlessui/react';
import { ISkill } from '../../lib/types';

const delayMap: { [index: number]: string } = {
  0: 'delay-100',
  1: 'delay-200',
  2: 'delay-300',
  3: 'delay-[400ms]',
  4: 'delay-500',
};

const Skill: React.FC<ISkill & { index: number }> = ({
  name,
  level,
  index,
}) => {
  const delay = delayMap[index] || 'delay-500';

  return (
    <Transition.Child
      as="div"
      enter={`transform-gpu transition ease-in-out duration-[1000ms] ${delay}`}
      enterFrom="opacity-0 translate-y-52"
      enterTo="opacity-100 translate-y-0"
      className="grid md:grid-cols-2 items-center"
    >
      <p>{name}</p>
      <div className="bg-yellow-400 h-2">
        <div className="bg-blue-900 h-2" style={{ width: `${level}%` }}></div>
      </div>
    </Transition.Child>
  );
};

export default Skill;
