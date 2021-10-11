const Employee = require('../Lib/Employee')

describe("employeeTest", () => {
    it("can create employee object", () => {
        const employee = new Employee()

        expect(typeof(employee)).toEqual("object")
    });
})
describe("employeeTest", () => {
    it("can create name within employee object", () => {
        const employee = new Employee("name");

        expect(employee.name).toEqual("name");
    });
})
describe("employeeTest", () => {
    it("can create ID within employee object", () => {
        const id = new Employee("id")

        expect(employee.id).toEqual("id")
    });
})
