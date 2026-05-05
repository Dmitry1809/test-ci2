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