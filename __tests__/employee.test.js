
const Employee = require('../lib/employee')

test('Check for name', () => {
const employee = new Employee('Dave', 12738, 'Dave@gmail.com');

expect(employee.name).toBe('Dave');
})

test('Check for Id', () => {
const employee = new Employee('Dave', 12738, 'Dave@gmail.com');

expect(employee.Id).toEqual(expect.any(Number))
})

test('Check for email', () => {
    const employee = new Employee('Dave', 12738, 'Dave@gmail.com');

    expect(employee.email).toBe('Dave@gmail.com');
})