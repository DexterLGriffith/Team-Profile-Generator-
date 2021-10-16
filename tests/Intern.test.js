const Employee = require('../Lib/Employee')
const Intern = require('../Lib/Intern')

// constructor(name, id, email, school, ) 
describe("internTest", () => {
    it("can create school within intern object", () => {
        // get school for intern object
        const getSchoolTest = "WutnTarnation University"
        const intern = new Intern("test", 1, "tester@testy.com", getSchoolTest);

        expect(intern.school).toEqual(getSchoolTest);
    });
})
describe("internTest", () => {
    it("can create role within intern object", () => {
        //get role
        const role = "Intern";
        const e = new Intern("Test", 1, "tester@testy.com", "WutnTarnation University")

        expect(e.getRole()).toEqual(role)
    });
})