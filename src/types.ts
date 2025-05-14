/**
 * Represents the standard continent names used in the library.
 */
export type ContinentName =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'Oceania'
  | 'South America';

/**
 * Represents an ISO 3166-1 alpha-2 country code.
 */
export type CountryCodeA2 = string;

/**
 * Represents the main data structure mapping continents to their respective country codes.
 */
export type ContinentCountryMapData = Record<ContinentName, CountryCodeA2[]>;
