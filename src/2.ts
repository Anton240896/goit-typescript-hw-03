class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails(): string {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

//  Клас Manager повинен бути підклас класу Employee
class Manager extends Employee {
  //  Необхідно реалізувати в класі Manager конструктор,
  // який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

export {};
