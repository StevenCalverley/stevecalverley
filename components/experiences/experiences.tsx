import { format } from "date-fns";
import { useInView } from "react-intersection-observer";
import { ICompany, IExperience, IPosition } from "../../lib/types";
import { Transition } from "@headlessui/react";

interface ExperienceProps {
  experiences: IExperience[];
}

function renderResponsibilities(responsibilities: string[]): JSX.Element {
  if (responsibilities.length > 0) {
    return (
      <>
        <h4 className="md:sr-only text-sm font-semibold uppercase tracking-wide">
          Responsibities
        </h4>
        <ul className="mt-2 md:mt-0 ml-6 list-outside list-disc text-sm">
          {responsibilities.map((responsibility, idx): JSX.Element => {
            return <li key={idx}>{responsibility}</li>;
          })}
        </ul>
      </>
    );
  }
  return <h4>No Resposibilites</h4>;
}
function renderPosition(
  positions: IPosition[],
  company: ICompany
): JSX.Element[] {
  return positions.map((position, idx) => {
    const { title, startDate, endDate } = position;
    return (
      <div key={idx}>
        <p className="text-sm">
          {format(new Date(startDate as string), "MMMM yyyy")} -{" "}
          {endDate ? (
            format(new Date(endDate as string), "MMMM yyyy")
          ) : (
            <strong>Current</strong>
          )}
        </p>
        <p className="font-bold truncate">{title}</p>
        <h4 className="text-sm">{company.name}</h4>
      </div>
    );
  });
}

function renderExperiences(experiences: IExperience[]): JSX.Element[] {
  return experiences.map((experience, idx) => {
    const { company, positions, responsibilities } = experience;
    return (
      <Transition.Child
        as="article"
        key={idx}
        enter="transform-gpu transition ease-in-out duration-[2000ms]"
        enterFrom="opacity-0 translate-y-52"
        enterTo="opacity-100 translate-y-0"
        className="relative py-6 md:py-0 grid grid-cols-1 md:grid md:grid-cols-2"
      >
        <div className="relative md:border-r-2 border-blue-900">
          <div className="hidden md:block md:absolute h-6 w-6 top-0 -right-3">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-[8px] stroke-current text-blue-900"
            >
              <circle cx="50" cy="50" r="46" fill="#fff" />
            </svg>
          </div>
          <div className="mt-8 space-y-4 md:space-y-8 md:text-right md:px-4">
            {renderPosition(positions, company)}
          </div>
        </div>
        <div className="mt-8 md:px-4">
          {renderResponsibilities(responsibilities)}
        </div>
      </Transition.Child>
    );
  });
}

export default function Experience({
  experiences,
}: ExperienceProps): JSX.Element {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-30% 0px",
  });
  return (
    <section className="px-4 pt-8 bg-gray-100 font-display min-h-[800px]">
      <div className="mx-auto max-w-5xl md:py-16 text-blue-900">
        <h2 className="font-bold text-xl md:text-center" ref={ref}>
          &lt;This is &#47;&gt;
          <br />
          My Work Experience
        </h2>
        <Transition
          as="div"
          appear={false}
          show={inView}
          className="mt-4 md:mt-12 divide-y md:divide-y-0 divide-blue-900"
        >
          {experiences.length > 0 ? (
            renderExperiences(experiences)
          ) : (
            <div>No Experiences</div>
          )}
        </Transition>
      </div>
    </section>
  );
}
