# continent-country-map

[![npm version](https://img.shields.io/npm/v/continent-country-map.svg)](https://www.npmjs.com/package/continent-country-map)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/venkatajanapareddy/continent-country-map/workflows/CI/badge.svg)](https://github.com/venkatajanapareddy/continent-country-map/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A modern, well-tested, and developer-friendly TypeScript library providing a clean and reliable dataset mapping continents to their respective countries using ISO 3166-1 alpha-2 codes. Perfect for dashboards, forms, filters, and geolocation-based logic.

## Features

- 🗺️ Comprehensive continent-to-country mapping
- 🔒 Zero runtime dependencies
- 📦 Tree-shakable ESM and CommonJS support
- 🎯 TypeScript-first with full type safety
- ✅ Thoroughly tested with 100% coverage
- 🚀 Case-insensitive lookups
- 📚 Well-documented API

## Installation

```bash
npm install continent-country-map
```

## Usage

### Basic Usage

```typescript
import {
  continentCountryMap,
  getCountriesByContinent,
  getContinentByCountryCode,
  isValidContinent,
  isCountryInContinent,
} from 'continent-country-map';

// Get all countries in Europe
const europeanCountries = getCountriesByContinent('Europe');
console.log(europeanCountries);
// ['AL', 'AD', 'AT', 'BY', 'BE', ...]

// Get the continent for a country code
const continent = getContinentByCountryCode('US');
console.log(continent);
// 'North America'

// Check if a string is a valid continent name
if (isValidContinent('Europe')) {
  console.log('Valid continent!');
}

// Check if a country belongs to a continent
const isUSInEurope = isCountryInContinent('US', 'Europe');
console.log(isUSInEurope);
// false
```

### Real-world Examples

#### Form Validation

```typescript
import { getContinentByCountryCode } from 'continent-country-map';

function validateCountryContinent(countryCode: string, continent: string): boolean {
  const actualContinent = getContinentByCountryCode(countryCode);
  return actualContinent?.toLowerCase() === continent.toLowerCase();
}

// Usage in a form
const isValid = validateCountryContinent('US', 'North America');
```

#### Filtering Countries by Continent

```typescript
import { getCountriesByContinent } from 'continent-country-map';

function filterCountriesByContinent(countries: string[], continent: string): string[] {
  const continentCountries = getCountriesByContinent(continent) || [];
  return countries.filter((country) => continentCountries.includes(country.toUpperCase()));
}

// Usage
const countries = ['US', 'DE', 'FR', 'JP'];
const europeanCountries = filterCountriesByContinent(countries, 'Europe');
// ['DE', 'FR']
```

#### Dashboard Continent Selection

```typescript
import { isValidContinent, getCountriesByContinent } from 'continent-country-map';

function handleContinentSelection(continent: string) {
  if (!isValidContinent(continent)) {
    console.error('Invalid continent selected');
    return;
  }

  const countries = getCountriesByContinent(continent);
  // Update dashboard with country data...
}
```

## API Reference

### Data

#### `continentCountryMap`

The main data structure mapping continents to their respective country codes.

```typescript
const map = {
  'Africa': ['DZ', 'AO', 'BJ', ...],
  'Antarctica': ['AQ', 'BV', ...],
  'Asia': ['AF', 'AM', 'AZ', ...],
  // ...
};
```

### Functions

#### `getCountriesByContinent(continentName: string): string[] | undefined`

Returns an array of ISO 3166-1 alpha-2 country codes for a given continent.

- **Parameters:**
  - `continentName`: The name of the continent (case-insensitive)
- **Returns:** Array of country codes or `undefined` if continent not found

#### `getContinentByCountryCode(countryCode: string): string | undefined`

Returns the continent name for a given country code.

- **Parameters:**
  - `countryCode`: The ISO 3166-1 alpha-2 country code (case-insensitive)
- **Returns:** Continent name or `undefined` if country code not found

#### `isValidContinent(continentName: string): boolean`

Type guard that checks if a string is a valid continent name.

- **Parameters:**
  - `continentName`: The string to check
- **Returns:** `true` if the string is a valid continent name

#### `isCountryInContinent(countryCode: string, continentName: string): boolean`

Checks if a country belongs to a specific continent.

- **Parameters:**
  - `countryCode`: The ISO 3166-1 alpha-2 country code
  - `continentName`: The name of the continent
- **Returns:** `true` if the country belongs to the specified continent

### Types

```typescript
type ContinentName =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'Oceania'
  | 'South America';

type CountryCodeA2 = string; // ISO 3166-1 alpha-2 code

type ContinentCountryMapData = Record<ContinentName, CountryCodeA2[]>;
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
