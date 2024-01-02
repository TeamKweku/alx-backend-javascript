// export default function createReportObject(employeesList) {
//   return {
//     allEmployees: {
//       ...employeesList,
//     },
//     getNumberOfDepartments() {
//       return Object.keys(employeesList).length;
//     },
//   };
// }

export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
