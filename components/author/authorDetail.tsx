import {
  DevicePhoneMobileIcon,
  InboxIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";
import type { IAuthor } from "../../lib/types";

interface AuthorDetailProps {
  author: IAuthor;
  className?: string;
}

export default function AuthorDetail({ author, className }: AuthorDetailProps) {
  return (
    <>
      <dl className={`text-sm space-y-2 ${className ? ` ${className}` : ""}`}>
        {author.contact && (
          <div className="flex items-center space-x-2">
            <DevicePhoneMobileIcon className="h-8 w-8 text-blue-900" />
            <div>
              <dd className="font-bold text-blue-900">Phone.</dd>
              <dt className="font-light">{author.contact}</dt>
            </div>
          </div>
        )}
        {author.email && (
          <div className="flex items-center space-x-2">
            <InboxIcon className="h-8 w-8 text-blue-900" />
            <div>
              <dd className="font-bold text-blue-900">Email.</dd>
              <dt className="font-light">{author.email}</dt>
            </div>
          </div>
        )}
        {author.website && (
          <div className="flex items-center space-x-2">
            <LinkIcon className="h-8 w-8 text-blue-900" />
            <div>
              <dd className="font-bold text-blue-900">Website.</dd>
              <dt className="font-light">
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
