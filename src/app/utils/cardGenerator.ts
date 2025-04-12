// Credit card types with their prefixes and lengths
export const cardTypes = {
  'visa': {
    name: 'Visa',
    prefixes: ['4'],
    lengths: [16, 13, 19]
  },
  'mastercard': {
    name: 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55', '2221', '2222', '2223', '2224', '2225', '2226', '2227', '2228', '2229', '223', '224', '225', '226', '227', '228', '229', '23', '24', '25', '26', '270', '271', '2720'],
    lengths: [16]
  },
  'amex': {
    name: 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  'discover': {
    name: 'Discover',
    prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    lengths: [16, 19]
  },
  'diners': {
    name: 'Diners Club',
    prefixes: ['300', '301', '302', '303', '304', '305', '36', '38', '39'],
    lengths: [14, 16, 19]
  },
  'jcb': {
    name: 'JCB',
    prefixes: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
    lengths: [16, 19]
  }
};

// Output format options
export const outputFormats = ['JSON', 'XML', 'CSV'];

// First names for random name generation
const firstNames = [
  'John', 'Jane', 'Michael', 'Emma', 'William', 'Olivia', 'James', 'Sophia', 
  'Robert', 'Isabella', 'David', 'Mia', 'Joseph', 'Charlotte', 'Thomas', 'Amelia', 
  'Charles', 'Harper', 'Daniel', 'Evelyn', 'Matthew', 'Abigail', 'Anthony', 'Emily',
  'Mark', 'Elizabeth', 'Donald', 'Sofia', 'Steven', 'Avery', 'Paul', 'Ella',
  'Andrew', 'Scarlett', 'Joshua', 'Grace', 'Kenneth', 'Chloe', 'Kevin', 'Victoria',
  'Brian', 'Madison', 'George', 'Lily', 'Edward', 'Hannah', 'Ronald', 'Aria',
  'Timothy', 'Zoe', 'Jason', 'Samantha', 'Jeffrey', 'Penelope', 'Ryan', 'Camila',
  'Jacob', 'Alyssa', 'Gary', 'Zoey', 'Nicholas', 'Aubrey', 'Eric', 'Audrey',
  'Jonathan', 'Claire', 'Stephen', 'Skylar', 'Larry', 'Violet', 'Justin', 'Stella',
  'Scott', 'Savannah', 'Brandon', 'Natalie', 'Benjamin', 'Leah', 'Samuel', 'Eva'
];

// Last names for random name generation
const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson',
  'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin',
  'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee',
  'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez',
  'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter',
  'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans',
  'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook',
  'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox',
  'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson',
  'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross'
];

// Name suffixes for random name generation
const nameSuffixes = ['', '', '', '', '', 'Jr.', 'Sr.', 'II', 'III', 'IV', 'PhD', 'MD'];

/**
 * Get a random element from an array
 */
function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generate a random number between min and max (inclusive)
 */
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Implementation of Luhn algorithm to generate the check digit
 */
function calculateLuhnCheckDigit(partialCardNumber: string): number {
  const digits = partialCardNumber.split('').map(Number);
  let sum = 0;
  let alternate = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    
    if (alternate) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    alternate = !alternate;
  }
  
  const checkDigit = (sum * 9) % 10;
  return checkDigit;
}

/**
 * Generate a valid credit card number
 */
export function generateCardNumber(cardType: string, length: number): string {
  const type = cardTypes[cardType as keyof typeof cardTypes];
  if (!type) throw new Error('Invalid card type');
  if (!type.lengths.includes(length)) throw new Error(`Invalid length for ${type.name}`);
  
  // Get a random prefix for this card type
  const prefix = getRandomElement(type.prefixes);
  
  // Generate random digits for the rest of the card (minus the check digit)
  let cardNumber = prefix;
  const randomDigitsLength = length - prefix.length - 1; // -1 for the check digit
  
  for (let i = 0; i < randomDigitsLength; i++) {
    cardNumber += getRandomNumber(0, 9);
  }
  
  // Calculate and append the check digit
  const checkDigit = calculateLuhnCheckDigit(cardNumber);
  cardNumber += checkDigit;
  
  return cardNumber;
}

/**
 * Generate a random cardholder name
 */
export function generateCardholderName(): string {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const suffix = getRandomElement(nameSuffixes);
  
  return suffix ? `${firstName} ${lastName} ${suffix}` : `${firstName} ${lastName}`;
}

/**
 * Generate a random CVV number
 * Amex: 4 digits, Others: 3 digits
 */
export function generateCVV(cardType: string): string {
  const length = cardType === 'amex' ? 4 : 3;
  let cvv = '';
  
  for (let i = 0; i < length; i++) {
    cvv += getRandomNumber(0, 9);
  }
  
  return cvv;
}

/**
 * Generate a random expiry date between 1-5 years in the future
 * Format: MM/YY
 */
export function generateExpiryDate(): string {
  const now = new Date();
  const currentYear = now.getFullYear();
  const yearsAhead = getRandomNumber(1, 5);
  const expiryYear = currentYear + yearsAhead;
  const expiryMonth = getRandomNumber(1, 12);
  
  // Format as MM/YY
  const month = expiryMonth.toString().padStart(2, '0');
  const year = (expiryYear % 100).toString().padStart(2, '0');
  
  return `${month}/${year}`;
}

/**
 * Format the card number for display
 */
export function formatCardNumber(number: string, cardType: string): string {
  if (cardType === 'amex') {
    return `${number.slice(0, 4)} ${number.slice(4, 10)} ${number.slice(10)}`;
  } else {
    // Default format in groups of 4
    return number.match(/.{1,4}/g)?.join(' ') || number;
  }
}

/**
 * Generate a complete credit card data object
 */
export function generateCardData(cardType: string, length: number) {
  const type = cardTypes[cardType as keyof typeof cardTypes];
  const cardNumber = generateCardNumber(cardType, length);
  const name = generateCardholderName();
  const cvv = generateCVV(cardType);
  const expiry = generateExpiryDate();
  
  return {
    type: type.name,
    name,
    number: cardNumber,
    cvv,
    expiry,
    formatted: formatCardNumber(cardNumber, cardType)
  };
}

/**
 * Generate card in the specified output format
 */
export function formatOutput(
  cardNumber: string, 
  cardType: string, 
  format: string
): string {
  const cardData = generateCardData(cardType, cardNumber.length);
  
  switch (format.toUpperCase()) {
    case 'JSON':
      return JSON.stringify(cardData, null, 2);
      
    case 'XML':
      return `<?xml version="1.0" encoding="UTF-8"?>
<card>
  <type>${cardData.type}</type>
  <name>${cardData.name}</name>
  <number>${cardData.number}</number>
  <cvv>${cardData.cvv}</cvv>
  <expiry>${cardData.expiry}</expiry>
  <formatted>${cardData.formatted}</formatted>
</card>`;
      
    case 'CSV':
      return `"Type","Name","Number","CVV","Expiry","Formatted"
"${cardData.type}","${cardData.name}","${cardData.number}","${cardData.cvv}","${cardData.expiry}","${cardData.formatted}"`;
      
    default:
      return cardNumber;
  }
} 