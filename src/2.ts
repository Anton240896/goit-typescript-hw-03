class Employee {
  public name: string; // властивість name, яка буде доступна всім.
  private department: string; // властивість department, яка буде доступна лише всередині класу Employee.
  protected salary: number; // salary, яке буде доступне лише всередині класу Employee та його підкласів.

  constructor(name: string, department: string, salary: number) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

// Клас Manager повинен бути підклас класу Employee
class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    //  Необхідно реалізувати в класі Manager конструктор,
    // який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.
    super(name, department, salary + 10000);
  }
}

export {};
