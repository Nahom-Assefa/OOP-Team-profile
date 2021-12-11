const Engineer = require('../lib/engineer');


test('Check for github', () => {
    const engineer = new Engineer('Dave', 12738, 'Dave@gmail.com', 'Github');
    

    expect(engineer.Github).toBe('Github');
})






