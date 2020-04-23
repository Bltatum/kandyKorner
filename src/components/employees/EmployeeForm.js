import React, { useContext, useRef } from "react";

import { LocationContext } from "../locations/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";

export default (props) => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const { employee } = useContext(EmployeeContext);

  const name = useRef();
  const location = useRef();
  const wage = useRef();
  const manager = useRef();
  const fullTime = useRef();

  const makeNewEmployee = () => {
    const locationId = parseInt(location.current.value);
    const isManager = manager.current.value;
    const isFulltime = fullTime.current.value;

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      addEmployee({
        name: name.current.value,
        locationId: locationId,
        hourlyRate: wage.current.value,
        manager: isManager,
        fullTime: isFulltime,
      }).then(props.toggler);
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">Add Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name: </label>
          <input
            type="text"
            id="employeeName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Employee Name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Work Location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="employeeLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="manager">Manager? </label>
          <select
            defaultValue=""
            name="manager"
            ref={manager}
            id="employeeLocation"
            className="form-control"
          >
            <option value="0">Select a option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeWage">Enter Hourly Rate </label>
          <input
            type="text"
            id="employeeWage"
            ref={wage}
            required
            autoFocus
            className="form-control"
            placeholder="Wage"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="fulltime">Full-time or Part-time? </label>
          <select
            defaultValue=""
            name="fulltime"
            ref={fullTime}
            id="employeeFullTime"
            className="form-control"
          >
            <option value="0">Select a option</option>
            <option value="true">Full-Time</option>
            <option value="false">Part-Time</option>
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          makeNewEmployee();
        }}
        className="btn btn-primary"
      >
        Save Employee
      </button>
    </form>
  );
};
