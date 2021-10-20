import { format } from 'date-fns';
import { IEducation } from '../../lib/types';

const Education: React.FC<IEducation> = ({
  title,
  startDate,
  endDate,
  institution,
  summary,
}) => {
  return (
    <div className="relative w-full py-3 pr-6 md:border-t border-yellow-400 md:flex">
      <div className="hidden md:block md:absolute h-6 w-6 -top-3 left-0">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current text-yellow-400"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
      <div className="mt-2 flex flex-col">
        <div className="flex-grow">
          <p className="text-sm">
            {format(new Date(startDate as string), 'yyyy')} -{' '}
            {endDate ? format(new Date(endDate as string), 'yyyy') : 'Current'}
          </p>
          <p className="font-semibold">{title}</p>
          <p className="text-sm flex-grow truncate">{institution}</p>
        </div>
        <div className="mt-2">
          <p className="italic text-xs">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
