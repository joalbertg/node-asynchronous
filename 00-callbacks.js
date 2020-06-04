const {employees, salaries} = require('./database');
const EmployeeId = 1;

const getEmployeeById = (id, callback) => {
  const employee = employees.find(employee => id === employee.id);

  if (!employee) {
    return callback(new Error(`Error: employee con id ${id} no existe!`));
  } else {
    return callback(null, employee);
  }
}

const getSalaryByEmployee = (employee, callback) => {
  const salary = salaries.find(salary => employee.id === salary.employee_id);

  if (!salary) {
    return callback(new Error(`salary con employee_id ${employee.id} no existe!`));
  } else {
    return callback(null, {employee, ...salary});
  }
}

const employeeInfo = getEmployeeById(EmployeeId, (error, currentEmployee) => {
  if (error) {
    return error.message;
  }

  const resp = getSalaryByEmployee(
    currentEmployee, (error, salary) => ({errorSalary: error, salary})
  );

  if (resp.errorSalary) {
    return resp.errorSalary.message;
  }

  const {salary: {employee, salary}} = resp;

  return `El salary de ${employee.name} es de ${salary}`;
});

console.log(employeeInfo);

