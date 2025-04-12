import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition duration-300">
              Credit Card Generator
            </Link>
            <p className="text-sm text-blue-200 mt-1">Test Data Generation Tool</p>
          </div>
          <nav className="flex justify-center md:justify-end space-x-6">
            <Link href="/" className="hover:text-blue-200 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition duration-300">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 