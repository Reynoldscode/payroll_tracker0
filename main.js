// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = [];


// Collect employee data

// TODO: Get user input to create and return an array of employee objects
  const collectEmployees = function() {

  let addEmployees = true;
  
  while(addEmployees){
    let employee = {};
    employee.firstName = prompt("First Name");
    employee.lastName = prompt("Last Name");
    employee.salary = parseInt(prompt("Salary"));
    employeesArray.push(employee);
    addEmployees= confirm("Do you want to add another employee?");
    
  };
  displayEmployees(employeesArray);
  displayAverageSalary();

}
  
// Display the average salary
const displayAverageSalary = function() {
   let totalSalary = 0
   for(let i=0; i < employeesArray.length; i++){
   const obj=employeesArray[i];
   totalSalary += obj.salary
  }
  // TODO: Calculate and display the average salary
  const averageSalary = totalSalary/employeesArray.length
  alert(`The average salary is:${averageSalary}`);
 

// Select a random employee
   const getRandomEmployee = function() {
   const randomindex = Math.floor(Math.random()*employeesArray.length);
   const randomEmployee = employeesArray[randomindex];
   return randomEmployee;
  }


  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
