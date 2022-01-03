import Link from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={clsx(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        {text}
      </a>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="container mx-auto max-w-3xl py-8">
      <nav>
        <NavItem href="/" text="Home" />
        <NavItem href="/dashboard" text="Dashboard" />
      </nav>
    </header>
  );
};

export default Header;
