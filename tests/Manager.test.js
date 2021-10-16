const Employee = require('../Lib/Employee')
const Manager = require('../Lib/Manager')

describe("managerTest", () => {
    it("can create officeNumber within manager object", () => {
        // get officenumber for manager object
        const officeNumberTest = "555-555-5555"
        const manager = new Manager("test", 1, "tester@testy.com", officeNumberTest);

        expect(manager.officeNumber).toEqual(officeNumberTest);
    });
})
describe("managerTest", () => {
    it("can create role within manager object", () => {
       //get role
        const role = "Manager";
        const e = new Manager("Test", 1, "tester@testy.com", "555-555-5555")
       

        expect(e.getRole()).toEqual(role)
    });
})