const {employees, salaries} = require('./database');
const EmployeeId = 1;

const getEmployeeById = id => {
  return new Promise((resolve, reject) => {
    const employee = employees.find(employee => id === employee.id);
    // consulta a DB
    setTimeout(() => {
      if (!employee) {
        reject(new Error(`Error: employee con id ${id} no existe!`));
      } else {
        resolve(employee);
      }
    }, 3000);
  });
}

//const getEmployeeById = async id => {
//  const employee = employees.find(employee => id === employee.id);

//  if (!employee) {
//    throw new Error(`Error: employee con id ${id} no existe!`);
//  } else {
//    return employee;
//  }
//}

const getSalaryByEmployee = async employee => {
  const salary = salaries.find(salary => employee.id === salary.employee_id);

  if (!salary) {
    throw new Error(`Error: salary con employee_id ${employee.id} no existe!`);
  } else {
    return {employee, ...salary};
  }
}

const getInformation = async id => {
  const currentEmployee = await getEmployeeById(id);
  const {employee, salary} = await getSalaryByEmployee(currentEmployee);

  return `El salario de ${employee.name} es de ${salary}`;
}

getInformation(EmployeeId)
  .then(console.log)
  .catch(error => console.error(error.message));

//getInformation(1).then( ({employee, salary}) => {
  //return console.log(`El salario de ${employee.name} es de ${salary}`);
//}).catch(console.log);

