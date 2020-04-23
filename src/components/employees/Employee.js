import React from "react";

export default ({ employee, location }) => (
  <section className="employee">
    <h3 className="employee_name">Name: {employee.name}</h3>
    <div className="emplyee_location">Works at: {location.name}</div>
    <div className="employee_fulltime">{employee.fulltime}</div>
    <div className="employee_manager">
      Manager: {employee.manager === "true" ? "YES" : "NO"}
    </div>
    <div className="employee_wage">Wage: ${employee.hourlyRate}</div>
  </section>
);
