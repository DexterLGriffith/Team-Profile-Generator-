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

// from notes   describe("isPalindrome", () => {
    // it("should return true if a string is a palindrome", () => {
    //     const str = "racecar";
  
    //     const result = new Algo().isPalindrome(str);
  
    //     expect(result).toEqual(true);