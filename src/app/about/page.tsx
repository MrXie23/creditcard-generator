import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Credit Card Generator',
  description: 'Information about the Credit Card Generator tool and its legitimate uses for testing and development.',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Credit Card Generator</h1>
        
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Purpose of This Tool</h2>
          <p className="text-gray-800 mb-4">
            The Credit Card Generator is a free web-based tool designed to help developers, testers, and educators 
            generate valid test credit card numbers that can be used during development and testing processes of 
            payment systems and applications.
          </p>
          <p className="text-gray-800 mb-4">
            When developing or testing applications that handle credit card payments, it's often necessary to use 
            credit card numbers that pass validation checks but don't represent actual financial accounts. This tool 
            fulfills that need by creating random but structurally valid credit card numbers.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Details</h2>
          <p className="text-gray-800 mb-4">
            All generated credit card numbers:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
            <li>Follow the standardized prefixes for each card type (e.g., Visa starts with 4)</li>
            <li>Contain the correct number of digits for the specific card type</li>
            <li>Pass the Luhn algorithm check (mod 10 check digit)</li>
            <li>Can be generated in various formats (JSON, XML, CSV) for easy integration</li>
          </ul>
          <p className="text-gray-800">
            The generator creates numbers that will pass basic validation checks performed by payment 
            processing systems, but they cannot be used to complete actual financial transactions as they are not 
            connected to any actual accounts.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supported Card Types</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-sm">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-blue-50 text-left text-blue-900 font-semibold border-b border-gray-300">Card Type</th>
                  <th className="py-3 px-4 bg-blue-50 text-left text-blue-900 font-semibold border-b border-gray-300">Prefix</th>
                  <th className="py-3 px-4 bg-blue-50 text-left text-blue-900 font-semibold border-b border-gray-300">Length</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300">Visa</td>
                  <td className="py-3 px-4 border-b border-gray-300">4</td>
                  <td className="py-3 px-4 border-b border-gray-300">13, 16, 19</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="py-3 px-4 border-b border-gray-300">Mastercard</td>
                  <td className="py-3 px-4 border-b border-gray-300">51-55, 2221-2720</td>
                  <td className="py-3 px-4 border-b border-gray-300">16</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300">American Express</td>
                  <td className="py-3 px-4 border-b border-gray-300">34, 37</td>
                  <td className="py-3 px-4 border-b border-gray-300">15</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="py-3 px-4 border-b border-gray-300">Discover</td>
                  <td className="py-3 px-4 border-b border-gray-300">6011, 644-649, 65</td>
                  <td className="py-3 px-4 border-b border-gray-300">16, 19</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300">JCB</td>
                  <td className="py-3 px-4 border-b border-gray-300">3528-3589</td>
                  <td className="py-3 px-4 border-b border-gray-300">16, 19</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="py-3 px-4 border-b border-gray-300">Diners Club</td>
                  <td className="py-3 px-4 border-b border-gray-300">300-305, 36, 38-39</td>
                  <td className="py-3 px-4 border-b border-gray-300">14, 16, 19</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">Disclaimer and Legal Notice</h2>
          <div className="text-red-700">
            <p className="mb-3">
              <strong>Important:</strong> This tool is provided for legitimate testing and educational purposes only.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The credit card numbers generated by this tool are not real credit cards.</li>
              <li>They do not represent actual accounts and cannot be used to make real purchases.</li>
              <li>While they pass validation checks, they will be declined by payment processors for actual transactions.</li>
              <li>We do not store, track, or log the card numbers generated by this tool.</li>
              <li>Using these numbers for any fraudulent or illegal activity is strictly prohibited and may violate local, national, and international laws.</li>
            </ul>
            <p>
              By using this tool, you agree that you will only use it for legitimate testing, development, or educational purposes.
              The operators of this website accept no responsibility for misuse of this tool or the numbers it generates.
            </p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legitimate Uses</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Testing e-commerce checkout processes</li>
            <li>Validating payment form interfaces</li>
            <li>Developing payment processing systems</li>
            <li>Educational demonstrations of credit card validation</li>
            <li>QA and software testing</li>
            <li>Populating test databases with sample data</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 