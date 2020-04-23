import React, { useState, useEffect } from "react";

export const EmployeeContext = React.createContext();

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:8088/Employees")
      .then((res) => res.json())
      .then(setEmployees);
  };

  const addEmployee = (employee) => {
    return fetch("http://localhost:8088/Employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then(getEmployees);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    console.log("****  employee APPLICATION STATE CHANGED  ****");
  }, [employees]);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
