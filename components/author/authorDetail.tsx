import {
  DeviceMobileIcon,
  InboxInIcon,
  LinkIcon,
} from '@heroicons/react/outline';
import type { IAuthor } from '../../lib/types';

interface AuthorDetailProps {
  author: IAuthor;
  className?: string;
}

export default function AuthorDetail({ author, className }: AuthorDetailProps) {
  return (
    <>
      <dl className={`text-sm space-y-6${className ? ` ${className}` : ''}`}>
        {author.contact && (
          <div className="flex space-x-2">
            <DeviceMobileIcon className="h-10 w-10 text-blue-900" />
            <div>
              <dd className="font-bold text-blue-900">Phone.</dd>
              <dt className="font-light">{author.contact}</dt>
            </div>
          </div>
        )}
        {author.email && (
          <div className="flex space-x-2">
            <InboxInIcon className="h-10 w-10 text-blue-900" />
            <div>
              <dd className="font-bold text-blue-900">Email.</dd>
              <dt className="mt-1 font-light">{author.email}</dt>
            </div>
          </div>
        )}
        {author.website && (
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
        )}
      </dl>
    </>
  );
}
