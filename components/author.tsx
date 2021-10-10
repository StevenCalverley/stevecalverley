import type { IAuthor } from '../lib/types';
import {
  DeviceMobileIcon,
  InboxInIcon,
  LinkIcon,
} from '@heroicons/react/outline';
import { Transition } from '@headlessui/react';
interface IAuthorProps {
  author: IAuthor;
}
export default function Author({ author }: IAuthorProps) {
  const { name, profile } = author;

  return (
    <>
      <div className="relative min-h-[288px] font-bold text-blue-900 font-display">
        <Transition
          appear={true}
          show={true}
          enter="transform-gpu transition ease-in-out duration-[2000ms]"
          enterFrom="opacity-0 -translate-x-52"
          enterTo="opacity-100 translate-x-0"
        >
          <div
            className={`absolute h-72 w-full sm:w-72 sm:rounded-full sm:shadow-lg bg-gradient-radial from-yellow-200 to-yellow-400 ring-2 ring-yellow-300`}
          ></div>
        </Transition>
        <div className="relative pt-12 px-4 sm:pl-12 md:pl-20 lg:pl-24 space-y-2">
          <p className="text-2xl sm:text-4xl">Hello.</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl">I&apos;m {name},</h2>
          <p className="text-xl sm:text-5xl">
            <span>&lt;Web &#47;&gt;</span>
            <br />
            <span>Developer.</span>
          </p>
        </div>
      </div>
      <section className="px-4 mt-8 md:grid md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-12 font-display">
        <dl className="md:pl-12 lg:pl-20 lg:col-span-2 2xl:col-span-4 text-sm space-y-6">
          <div className="flex space-x-2">
            <DeviceMobileIcon className="h-10 w-10 text-blue-900" />
            <div>
              <dd className="font-bold text-blue-900">Phone.</dd>
              <dt className="font-light">{author.contact}</dt>
            </div>
          </div>
          <div className="flex space-x-2">
            <InboxInIcon className="h-10 w-10 text-blue-900" />
            <div>
              <dd className="font-bold text-blue-900">Email.</dd>
              <dt className="mt-1 font-light">{author.email}</dt>
            </div>
          </div>
          <div className="flex space-x-2">
            <LinkIcon className="h-10 w-10 text-blue-900" />
            <div>
              <dd className="font-bold text-blue-900">Website.</dd>
              <dt className="mt-1 font-light">
                <a
                  href={author.website}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-300"
                >
                  {author.website}
                </a>
              </dt>
            </div>
          </div>
        </dl>
        <div className="mt-8 md:mt-0 lg:col-span-3 2xl:col-span-6 max-w-2xl">
          <h3 className="text-blue-900 font-bold text-xl">My Profile.</h3>
          {profile && (
            <p className="mt-2 md:text-sm text-gray-700 font-light">
              {profile}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
