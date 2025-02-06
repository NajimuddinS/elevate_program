const employees = [
    { id: 1, name: "Alice", department: "HR", salary: 50000, status: "active" },
    { id: 2, name: "Bob", department: "Engineering", salary: 80000, status: "inactive" },
    { id: 3, name: "Charlie", department: "HR", salary: 60000, status: "active" },
    { id: 4, name: "David", department: "Engineering", salary: 90000, status: "active" },
    { id: 5, name: "Eve", department: "Marketing", salary: 70000, status: "active" }
  ];
  
  const departmentBudgets = {
    HR: 150000,
    Engineering: 200000,
    Marketing: 100000
  };

  
const filteredData = employees.filter(el=> el.status=="active")
let departments = {}
for(let i=0;i<employees.length;i++){
  let dep = employees[i].department;
//   console.log(dep)
  let salary = employees[i].salary;
//   console.log(salary)
  let name = employees[i].name;
  if(departments[dep] == undefined){
    departments[dep] = []
    departments[dep].push({name,salary})
  }else{
    departments[dep].push({name,salary})
  }
}

let res = []
for(let department in departments){
  let employees = departments[department]
  let totalSalary = 0
  for(let i=0;i<employees.length;i++){
    totalSalary+=employees[i].salary
  }
  let departmentBudget = departmentBudgets[department]
  let isOverBudget = departmentBudget < totalSalary
  res.push({department, employees, totalSalary, departmentBudget, isOverBudget})
}
console.log(JSON.stringify(res))