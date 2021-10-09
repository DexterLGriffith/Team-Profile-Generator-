const Employee = require('../Lib/Employee')

describe("EmployeeTest", () => {
    it("can create employee object", () => {
        const employee = new Employee()

        expect(typeof(employee)).toEqual(object)
    });
})
    
