import { Metadata } from 'next';
import CreditCardGenerator from './components/CreditCardGenerator';

export const metadata: Metadata = {
  title: 'Credit Card Generator - Generate Test Credit Card Numbers',
  description: 'Free tool to generate valid test credit card numbers for development, testing and educational purposes.',
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero section */}
      <section className="py-10 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Credit Card Number Generator
          </h1>
          <p className="text-xl text-gray-800 mb-6">
            Generate valid test credit card numbers for development and testing
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-left">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> All generated credit card numbers are for testing purposes only.
                  They pass standard validation checks but cannot be used for actual transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Credit Card Generator Component */}
      <section className="mb-12">
        <CreditCardGenerator />
      </section>
      
      {/* About and Information Section */}
      <section className="max-w-4xl mx-auto py-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Tool</h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-800">
              This credit card generator creates valid test credit card numbers that can be used for testing payment systems,
              e-commerce websites, or any application that requires credit card validation.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Features:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Generate valid credit card numbers for all major card providers</li>
              <li>Select specific card types (Visa, Mastercard, American Express, etc.)</li>
              <li>Choose the desired length of the card number</li>
              <li>Export in various formats (JSON, XML, CSV)</li>
              <li>All generated numbers pass the Luhn check algorithm</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How it Works:</h3>
            <p className="text-gray-800">
              The generator creates random credit card numbers that follow the format rules for each card type.
              Each number starts with the correct prefix for the selected card type (e.g., Visa cards start with a 4),
              contains the correct number of digits, and includes a valid check digit calculated using the Luhn algorithm.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Disclaimer:</h3>
            <p className="text-gray-800">
              This tool is provided for testing and educational purposes only. The credit card numbers generated:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Are not connected to any real accounts</li>
              <li>Do not have any associated funds</li>
              <li>Cannot be used for actual financial transactions</li>
              <li>Should not be used for any fraudulent or illegal activities</li>
            </ul>
            <p className="mt-4 text-gray-800">
              Use of the generated card numbers for any purpose other than legitimate testing or development is strictly prohibited.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
