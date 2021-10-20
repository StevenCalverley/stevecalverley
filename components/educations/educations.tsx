import { IEducation } from '../../lib/types/index';
import Education from './education';

interface EducationsProps {
  educations: IEducation[];
}

const Educations: React.FC<EducationsProps> = ({ educations }) => {
  return (
    <section className="px-4 py-8 bg-gray-100 font-display">
      <div className="mx-auto max-w-5xl md:py-8 text-blue-900">
        <div className="">
          <h2 className="font-bold text-2xl text-blue-900">
            &lt;About &#47;&gt;
            <br />
            My Education
          </h2>
        </div>
        <div className="mt-4 md:mt-16 md:flex w-full">
          {educations.map((education, idx) => {
            return <Education key={idx} {...education} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Educations;
