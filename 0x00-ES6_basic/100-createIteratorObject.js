export default function createIteratorObject(report) {
  let currentEmployeeIndex = 0;

  const employees = Object.values(report.allEmployees).flat();

  return {
    next() {
      if (currentEmployeeIndex >= employees.length) {
        return { done: true };
      }

      const employee = employees[currentEmployeeIndex];
      currentEmployeeIndex += 1;

      return {
        value: `${employee}`,
        done: false,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
