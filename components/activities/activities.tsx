import React from 'react';
import { IActivity } from '../../lib/types';
import Activity from './activity';

interface ActivitiesProps {
  activities: IActivity[];
}

const Activities: React.FC<ActivitiesProps> = ({ activities }) => {
  return (
    <section className="px-4 py-8 bg-yellow-400 font-display">
      <div className="mx-auto max-w-5xl md:py-8 text-blue-900 grid place-content-center md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-bold text-2xl text-blue-900 text-center">
            &lt;Daily &#47;&gt;
            <br />
            Activities and Hobbies,
          </h2>
        </div>
        <div className="mt-8 md:mt-0 md:col-span-6 md:col-start-6 grid md:grid-cols-3 gap-8">
          {activities.map((activity, idx) => {
            return <Activity key={idx} {...activity} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
