'use client';

import { useState } from 'react';
import { cardTypes, outputFormats, generateCardNumber, formatOutput } from '../utils/cardGenerator';

export default function CreditCardGenerator() {
  const [selectedCardType, setSelectedCardType] = useState<string>('visa');
  const [selectedLength, setSelectedLength] = useState<number>(16);
  const [selectedFormat, setSelectedFormat] = useState<string>('JSON');
  const [generatedCard, setGeneratedCard] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Get available lengths for the selected card type
  const availableLengths = cardTypes[selectedCardType as keyof typeof cardTypes]?.lengths || [];

  // Handle card type change
  const handleCardTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    setSelectedCardType(newType);
    
    // Reset length to the first available one for the selected card type
    const newLengths = cardTypes[newType as keyof typeof cardTypes]?.lengths || [];
    setSelectedLength(newLengths[0] || 16);
  };

  // Generate a new card number
  const handleGenerate = () => {
    try {
      const cardNumber = generateCardNumber(selectedCardType, selectedLength);
      const formattedOutput = formatOutput(cardNumber, selectedCardType, selectedFormat);
      setGeneratedCard(formattedOutput);
      setCopied(false);
    } catch (error) {
      console.error('Error generating card:', error);
      setGeneratedCard('Error generating card. Please try different options.');
    }
  };

  // Copy to clipboard
  const handleCopy = () => {
    if (!generatedCard) return;
    
    navigator.clipboard.writeText(generatedCard)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Generate Test Credit Card</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Card Type Selection */}
        <div>
          <label htmlFor="cardType" className="block text-sm font-medium text-gray-800 mb-1">
            Card Type
          </label>
          <select
            id="cardType"
            value={selectedCardType}
            onChange={handleCardTypeChange}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"
          >
            {Object.entries(cardTypes).map(([key, { name }]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Card Length Selection */}
        <div>
          <label htmlFor="cardLength" className="block text-sm font-medium text-gray-800 mb-1">
            Card Length
          </label>
          <select
            id="cardLength"
            value={selectedLength}
            onChange={(e) => setSelectedLength(parseInt(e.target.value))}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"
          >
            {availableLengths.map(length => (
              <option key={length} value={length}>
                {length} digits
              </option>
            ))}
          </select>
        </div>
        
        {/* Output Format Selection */}
        <div>
          <label htmlFor="outputFormat" className="block text-sm font-medium text-gray-800 mb-1">
            Output Format
          </label>
          <select
            id="outputFormat"
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"
          >
            {outputFormats.map(format => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Generate Button */}
      <div className="mb-6">
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          Generate Card
        </button>
      </div>
      
      {/* Output Display */}
      {generatedCard && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-medium text-gray-800">Generated Card Data</h3>
            <button
              onClick={handleCopy}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              {copied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                  Copy to Clipboard
                </>
              )}
            </button>
          </div>
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">{generatedCard}</pre>
        </div>
      )}
      
      {/* Disclaimer */}
      <div className="mt-6 text-sm text-gray-800 bg-blue-50 p-3 rounded-md border border-blue-200">
        <p className="font-medium text-blue-800 mb-1">⚠️ Disclaimer</p>
        <p>
          All credit card numbers generated by this tool are completely random and comply with the format specifications for the selected card type,
          including the Luhn checksum. They are not real credit card numbers and cannot be used for actual financial transactions.
          This tool is provided for testing and development purposes only.
        </p>
      </div>
    </div>
  );
} 