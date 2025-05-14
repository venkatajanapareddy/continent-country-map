import { describe, it, expect } from 'vitest';
import {
  continentCountryMap,
  getCountriesByContinent,
  getContinentByCountryCode,
  isValidContinent,
  isCountryInContinent,
  type ContinentName,
} from '../src';

describe('continentCountryMap', () => {
  it('should have all seven continents', () => {
    const continents: ContinentName[] = [
      'Africa',
      'Antarctica',
      'Asia',
      'Europe',
      'North America',
      'Oceania',
      'South America',
    ];
    expect(Object.keys(continentCountryMap)).toEqual(expect.arrayContaining(continents));
  });

  it('should have valid country codes for each continent', () => {
    Object.values(continentCountryMap).forEach((countries) => {
      countries.forEach((code) => {
        expect(code).toMatch(/^[A-Z]{2}$/);
      });
    });
  });

  it('should have US in North America', () => {
    expect(continentCountryMap['North America']).toContain('US');
  });

  it('should have DE in Europe', () => {
    expect(continentCountryMap['Europe']).toContain('DE');
  });
});

describe('getCountriesByContinent', () => {
  it('should return countries for a valid continent', () => {
    const countries = getCountriesByContinent('Europe');
    expect(countries).toBeDefined();
    expect(countries).toContain('DE');
    expect(countries).toContain('FR');
  });

  it('should be case-insensitive', () => {
    const countries1 = getCountriesByContinent('europe');
    const countries2 = getCountriesByContinent('EUROPE');
    expect(countries1).toEqual(countries2);
  });

  it('should return undefined for invalid continent', () => {
    expect(getCountriesByContinent('InvalidContinent')).toBeUndefined();
  });

  it('should return a new array (not reference)', () => {
    const countries1 = getCountriesByContinent('Europe');
    const countries2 = getCountriesByContinent('Europe');
    expect(countries1).not.toBe(countries2);
  });
});

describe('getContinentByCountryCode', () => {
  it('should return continent for valid country code', () => {
    expect(getContinentByCountryCode('US')).toBe('North America');
    expect(getContinentByCountryCode('DE')).toBe('Europe');
  });

  it('should be case-insensitive', () => {
    expect(getContinentByCountryCode('us')).toBe('North America');
    expect(getContinentByCountryCode('Us')).toBe('North America');
  });

  it('should return undefined for invalid country code', () => {
    expect(getContinentByCountryCode('XX')).toBeUndefined();
  });
});

describe('isValidContinent', () => {
  it('should return true for valid continent names', () => {
    expect(isValidContinent('Europe')).toBe(true);
    expect(isValidContinent('North America')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isValidContinent('europe')).toBe(true);
    expect(isValidContinent('EUROPE')).toBe(true);
  });

  it('should return false for invalid continent names', () => {
    expect(isValidContinent('InvalidContinent')).toBe(false);
    expect(isValidContinent('')).toBe(false);
  });
});

describe('isCountryInContinent', () => {
  it('should return true for valid country-continent pairs', () => {
    expect(isCountryInContinent('US', 'North America')).toBe(true);
    expect(isCountryInContinent('DE', 'Europe')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isCountryInContinent('us', 'north america')).toBe(true);
    expect(isCountryInContinent('US', 'NORTH AMERICA')).toBe(true);
  });

  it('should return false for invalid country-continent pairs', () => {
    expect(isCountryInContinent('US', 'Europe')).toBe(false);
    expect(isCountryInContinent('XX', 'North America')).toBe(false);
    expect(isCountryInContinent('US', 'InvalidContinent')).toBe(false);
  });
});
