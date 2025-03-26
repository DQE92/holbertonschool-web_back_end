export default function createReportObject(employeesList) {
    return {
        allEmployees: { ...employeesList }, // Spread syntax to ensure proper structure
        getNumberOfDepartments() {
            return Object.keys(this.allEmployees).length; // Returns the number of departments
      },
    };
}