import { Transition } from '@headlessui/react';
import type { IAuthor } from '../../lib/types';
import AuthorDetail from './authorDetail';

interface IAuthorProps {
  author: IAuthor;
}
export default function Author({ author }: IAuthorProps) {
  const { name, profile } = author;

  return (
    <>
      <Transition
        as="section"
        appear={true}
        show={true}
        className="relative md:mx-auto max-w-5xl md:mt-12 min-h-[200px] md:min-h-[288px] font-bold text-blue-900 font-display"
      >
        <Transition.Child
          enter="transform-gpu transition ease-in-out duration-[2000ms]"
          enterFrom="opacity-0 md:-translate-x-52"
          enterTo="opacity-100 md:translate-x-0"
          className={`absolute inset-0 md:h-72 w-full md:w-72 md:rounded-full md:shadow-lg bg-gradient-radial from-yellow-200 to-yellow-400 ring-2 ring-yellow-300`}
        ></Transition.Child>
        <div className="relative pt-12 md:pt-20 px-4">
          <Transition.Child
            enter="transform-gpu transition ease-in-out duration-[2000ms]"
            enterFrom="opacity-0 -translate-y-52 md:translate-y-0 md:-translate-x-52"
            enterTo="opacity-100 translate-y-0 md:-translate-x-0"
            className="md:pl-20 lg:pl-28"
          >
            <p className="text-2xl sm:text-3xl">Hello.</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              I&apos;m {name},
            </h2>
            <div className="mt-2 text-xl sm:text-2xl">
              <p className="leading-none">&lt;Web &#47;&gt;</p>
              <p className="leading-none">Developer.</p>
            </div>
          </Transition.Child>
        </div>
      </Transition>
      <Transition
        as="section"
        appear={true}
        show={true}
        className="md:mx-auto max-w-5xl my-8 md:my-28 px-4 font-display"
      >
        <div className="md:pl-20 lg:pl-28 md:grid md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-12">
          <AuthorDetail
            author={author}
            className="lg:col-span-2 2xl:col-span-4"
          />
          <div className="mt-8 md:mt-0 lg:col-span-3 2xl:col-span-8 max-w-2xl">
            {profile && (
              <>
                <h3 className="text-blue-900 font-bold text-xl">My Profile.</h3>
                <p className="mt-2 md:text-sm text-gray-700 font-light">
                  {profile}
                </p>
              </>
            )}
          </div>
        </div>
      </Transition>
    </>
  );
}
