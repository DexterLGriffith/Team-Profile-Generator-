const Employee = require('../Lib/Employee')
const Engineer = require('../Lib/Engineer')

//  constructor(name, id, email, Github, )
describe("engineerTest", () => {
    it("can create Github within engineer object", () => {
        //get github for engineer object
        const gitHubTest = "test.com"
        const engineer = new Engineer("Test", 1, "tester@testy.com", gitHubTest);

        expect(engineer.Github).toEqual(gitHubTest);
    });
})
describe("engineerTest", () => {
    it("can create role within engineer object", () => {
        //get role 
        const role = "Engineer";
        const e = new Engineer("Test", 1, "tester@testy.com","test.com")

        expect(e.getRole()).toEqual(role)
    });
})