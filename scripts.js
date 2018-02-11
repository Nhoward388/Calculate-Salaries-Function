var employees = ["John", "Jake", "Jack", "Josh", "Joshua", "Johnathon", "Jorge", "Jeremy", "Justin", "Adam"];
var hours = [20, 34, 46, 39, 35, 22, 45, 50, 41, 43];
var salaries = [10.1, 12.3, 13, 11, 13.1, 10.1, 13, 25, 11.3, 12.7];

function calcSalary() {
  // salaries = (salaries * hours);
  // salaries *= hours;
  for (var i = 0; i < 10; i++) {
    salaries[i] = (salaries[i] * hours[i]);
    document.write("Employee " + employees[i] + " worked " + hours[i] + " hours during the previous week, for a total of " + salaries[i] +"$.<br>");
  }
}

window.addEventListener("load", calcSalary);
