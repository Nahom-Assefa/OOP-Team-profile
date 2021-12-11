const Intern = require('../lib/intern');


test('Check for Intern school', () => {
    const intern = new Intern('Dave', 12738, 'Dave@gmail.com', 'University Of Minnesota');
    

    expect(intern.school).toBe('University Of Minnesota');
})