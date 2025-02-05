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
  
  activeEmployees=employees.filter((employees)=>(employees.status==="active"))
  sortedSalary=activeEmployees.sort((a,b)=>b.activeEmployees-a.activeEmployees)
  grpByDepartment=Object.groupBy(sortedSalary,({department})=>department)
  combinedData=
//   console.log(grpByDepartment)
  console.log(combinedData)



//   activeEmployees=employees.filter((employees)=>(employees.status==="active"))
//   grpByDepartment=Object.groupBy(activeEmployees,({department})=>department)
//   sortedSalary=activeEmployees.sort((a,b)=>b.activeEmployees-a.activeEmployees)

//   console.log(grpByDepartment)