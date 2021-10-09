import Link from 'next/link';

const Nav = () => (
  <nav className="flex space-x-2">
    <Link href="/">
      <a className="font-medium text-gray-700">Home</a>
    </Link>

    <Link href="/about">
      <a className="font-medium text-gray-700">About</a>
    </Link>
  </nav>
);

export default Nav;
