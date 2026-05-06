/* global test, expect */
import { getHealthStatus } from '../health.js';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])('should return status %s for health %i', (character, expected) => {
  const result = getHealthStatus(character);
  expect(result).toBe(expected);
});



import { sortCharactersByHealth } from '../health.js';

test('should sort characters by health in descending order', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortCharactersByHealth(input);

  // Используем toEqual для глубокого сравнения объектов/массивов
  expect(result).toEqual(expected);
});

test('should not change the original array', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];
  const inputCopy = [...input];
  
  sortCharactersByHealth(input);
  
  expect(input).toEqual(inputCopy);
});

