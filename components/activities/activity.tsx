import { IActivity } from '../../lib/types';
import dynamic from 'next/dynamic';

const Activity: React.FC<IActivity> = ({ name, iconComponent }: IActivity) => {
  const IconComponent = dynamic<{ className: string }>(
    () => import(`../icon/${iconComponent}`)
  );
  return (
    <div className="flex flex-col items-center">
      <IconComponent className="h-12 w-12" />
      <p className="mt-2">{name}</p>
    </div>
  );
};

export default Activity;
