import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Credit Card Generator</h3>
            <p className="text-gray-300 text-sm">
              A tool for generating test credit card numbers for development and testing purposes only.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-300 text-sm">
              The generated credit card numbers are for testing purposes only. They are not real credit cards and cannot be used for actual transactions.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>© {currentYear} Credit Card Generator. All rights reserved.</p>
          <p className="mt-2">For testing and development purposes only.</p>
        </div>
      </div>
    </footer>
  );
} 