import { ContinentName, CountryCodeA2 } from './types';
import { continentCountryMap } from './data';

/**
 * Gets an array of country codes for a given continent.
 * @param continentName - The name of the continent (case-insensitive)
 * @returns An array of ISO 3166-1 alpha-2 country codes, or undefined if the continent is not found
 */
export function getCountriesByContinent(
  continentName: ContinentName | string
): CountryCodeA2[] | undefined {
  const normalizedContinent = Object.keys(continentCountryMap).find(
    (key) => key.toLowerCase() === continentName.toLowerCase()
  ) as ContinentName | undefined;

  return normalizedContinent ? [...continentCountryMap[normalizedContinent]] : undefined;
}

/**
 * Gets the continent name for a given country code.
 * @param countryCode - The ISO 3166-1 alpha-2 country code (case-insensitive)
 * @returns The name of the continent, or undefined if the country code is not found
 */
export function getContinentByCountryCode(
  countryCode: CountryCodeA2 | string
): ContinentName | undefined {
  const normalizedCode = countryCode.toUpperCase();

  for (const [continent, countries] of Object.entries(continentCountryMap)) {
    if (countries.includes(normalizedCode)) {
      return continent as ContinentName;
    }
  }

  return undefined;
}

/**
 * Type guard that checks if a string is a valid continent name.
 * @param continentName - The string to check
 * @returns True if the string is a valid continent name (case-insensitive)
 */
export function isValidContinent(continentName: string): continentName is ContinentName {
  return Object.keys(continentCountryMap).some(
    (key) => key.toLowerCase() === continentName.toLowerCase()
  );
}

/**
 * Checks if a country belongs to a specific continent.
 * @param countryCode - The ISO 3166-1 alpha-2 country code (case-insensitive)
 * @param continentName - The name of the continent (case-insensitive)
 * @returns True if the country belongs to the specified continent, false otherwise
 */
export function isCountryInContinent(
  countryCode: CountryCodeA2 | string,
  continentName: ContinentName | string
): boolean {
  const normalizedCode = countryCode.toUpperCase();
  const normalizedContinent = Object.keys(continentCountryMap).find(
    (key) => key.toLowerCase() === continentName.toLowerCase()
  );

  if (!normalizedContinent) {
    return false;
  }

  return continentCountryMap[normalizedContinent as ContinentName].includes(normalizedCode);
}
