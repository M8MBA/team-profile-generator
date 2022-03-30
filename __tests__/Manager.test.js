const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager', () => {
  const manager = new Manager('Jack', 1, 'jack@gmail.com', 'role', 111);

  expect(manager.name).toBe('Jack');
  expect(manager.id).toEqual(1);
  expect(manager.email).toBe('jack@gmail.com');
  expect(manager.role).toBe('role');
  expect(manager.officeNumber).toBe(111);
});