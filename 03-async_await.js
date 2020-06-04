const {employees, salaries} = require('./database');
const EmployeeId = 1;

const getEmployeeById = async id => {
  const employee = employees.find(employee => id === employee.id);

  if (!employee) {
    throw new Error(`Error: employee con id ${id} no existe!`);
  } else {
    return employee;
  }
}

const getSalaryByEmployee = async employee => {
  const salary = salaries.find(salary => employee.id === salary.employee_id);

  if (!salary) {
    throw new Error(`Error: salary con employee_id ${employee.id} no existe!`);
  } else {
    return {employee, ...salary};
  }
}

getEmployeeById(EmployeeId)
  .then(getSalaryByEmployee)
  .then( ({employee, salary}) => {
    console.log(`El salario de ${employee.name} es de ${salary}`);
  }).catch(error => console.log(error.message));

