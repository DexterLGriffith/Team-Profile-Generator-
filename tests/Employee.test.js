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
        const email = tester@testy.com;
        const e = new Employee("Test", email)
       

        expect(e.email).toEqual(email)
    });
// describe("employeeTest", () => {
//     it("can create role within employee object", () => {
//        //get role
//         const idTest = 50;
//         const e = new Employee("Test", idTest)
       

//         expect(e.id).toEqual(idTest)
//     });

// from notes   describe("isPalindrome", () => {
    // it("should return true if a string is a palindrome", () => {
    //     const str = "racecar";
  
    //     const result = new Algo().isPalindrome(str);
  
    //     expect(result).toEqual(true);