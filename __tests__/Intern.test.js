const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern', () => {
  const intern = new Intern('Grace', 11, 'grace@gmail.com', 'role', 'UCLA');

  expect(intern.name).toBe('Grace');
  expect(intern.id).toEqual(11);
  expect(intern.email).toBe('grace@gmail.com');
  expect(intern.role).toBe('role');
  expect(intern.school).toBe('UCLA');
});