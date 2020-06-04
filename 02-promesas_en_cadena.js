const {employees, salaries} = require('./database');
const EmployeeId = 1;

const getEmployeeById = id => {
  const employee = employees.find(employee => id === employee.id);

  return new Promise((resolve, reject) => {
    if (!employee) {
      reject(new Error(`Error: employee con id ${id} no existe!`));
    } else {
      resolve(employee);
    }
  });
}

const getSalaryByEmployee = employee => {
  const salary = salaries.find(salary => employee.id === salary.employee_id);

  return new Promise((resolve, reject) => {
    if (!salary) {
      reject(new Error(`Error: salary con employee_id ${employee.id} no existe!`));
    } else {
      resolve({employee, ...salary});
    }
  });
}

getEmployeeById(EmployeeId)
  .then(getSalaryByEmployee)
  .then( ({employee, salary}) => {
    console.log(`El salario de ${employee.name} es de ${salary}`);
  }).catch(error => console.log(error.message));

