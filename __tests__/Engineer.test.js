const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
  const engineer = new Engineer('Bobby', 9, 'bobby@gmail.com', 'role', 'BobbyBull33');

  expect(engineer.name).toBe('Bobby');
  expect(engineer.id).toEqual(9);
  expect(engineer.email).toBe('bobby@gmail.com');
  expect(engineer.role).toBe('role');
  expect(engineer.github).toBe('BobbyBull33');
});
