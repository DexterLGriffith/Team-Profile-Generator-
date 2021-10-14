const Employee = require('../Lib/Employee')

describe("employeeTest", () => {
    it("can create employee object", () => {
        const employee = new Employee()

        expect(typeof(employee)).toEqual("object")
    });
})
describe("employeeTest", () => {
    it("can create name within employee object", () => {
        const name = "Dex"
        const employee = new Employee(name);

        expect(employee.name).toEqual(name);
    });
})
describe("employeeTest", () => {
    it("can create id within employee object", () => {
        // need to define id 
        const idTest = 50;
        const e = new Employee("Test", idTest)
       

        expect(e.id).toEqual(idTest)
    });
})
describe("employeeTest", () => {
    it("can create email within employee object", () => {
        // get email 
        const emailTest = "tester@testy.com";
        const e = new Employee("Test", 1, emailTest)
       

        expect(e.email).toEqual(emailTest)
    });
})
describe("employeeTest", () => {
    it("can create role within employee object", () => {
       //get role
        const role = "staff";
        const e = new Employee("Test", role)
       

        expect(e.role).toEqual(role)
    });
})
