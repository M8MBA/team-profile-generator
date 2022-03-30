const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee', () => {
  const employee = new Employee('Jerry', 8, 'jerry@gmail.com', 'role');

  expect(employee.name).toBe('Jerry');
  expect(employee.id).toEqual(8);
  expect(employee.email).toBe('jerry@gmail.com');
  expect(employee.role).toBe('role');
});
