const Manager = require('../lib/manager');


test('Check for Office Number', () => {
    const manager = new Manager('Dave', 12738, 'Dave@gmail.com', 8);
    

    expect(manager.officeNumber).toEqual(expect.any(Number));
})