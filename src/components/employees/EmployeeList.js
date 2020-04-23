import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Employee from "./Employee";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../locations/LocationProvider";
import EmployeeForm from "./EmployeeForm";

export default () => {
  const { employees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="fakeLink href" onClick={toggle}>
        Make Employee
      </div>
      <div className="employees">
        {employees.map((emp) => {
          const foundEmpLoc = locations.find(
            (loc) => loc.id === emp.locationId
          );

          return (
            <Employee key={emp.id} employee={emp} location={foundEmpLoc} />
          );
        })}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Employee</ModalHeader>
        <ModalBody>
          <EmployeeForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
