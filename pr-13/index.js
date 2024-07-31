class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    this.leave = 2;
    this.penalty = 500;
  }

  takeLeave(days) {
    if (this.leave >= days) {
      this.leave -= days;
      this.salary -= days * this.penalty;
      return `${this.name} taken ${days} days of leave. Remaining leave: ${this.leave}. Salary after deduction: ${this.salary}`;
    } else {
      return "You don't have enough leave";
    }
  }

  incrementSalary(amount) {
    this.salary += amount;
    return `${this.name} salary has been incremented by ${amount}. New salary: ${this.salary}`;
  }

  checkSalary() {
    return `The current salary of ${this.name} is ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.employees = [];
  }

  removeEmployee(employee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].name === employee.name) {
        this.employees.splice(i, 1);
        return `${employee.name} has been removed from the team`;
      }
    }
    return `Employee not found. Please check the details and try again.`;
  }

  checkEmployee(employee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].name === employee.name) {
        return `${employee.name} is in the team`;
      }
    }
    return `${employee.name} is not in the team`;
  }

  incrementEmployeeSalary(employee, amount) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].name === employee.name) {
        return this.employees[i].incrementSalary(amount);
      }
    }
    return `${employee.name} is not found in the team`;
  }
}

let employee1 = new Employee("Employee1", 20000);
let employee2 = new Employee("Employee2", 25000);
let employee3 = new Employee("Employee3", 30000);

let manager = new Manager();
manager.employees.push(employee1, employee2, employee3);

// employee1.takeLeave(1)
console.log(employee2.takeLeave(1));
console.log(employee1.checkSalary());
console.log(employee2.incrementSalary(2000));
console.log(employee3.checkSalary());
console.log(manager.removeEmployee(employee1));
console.log(manager.checkEmployee(employee2));