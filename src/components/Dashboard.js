import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductProvider } from "./products/ProductProvider";
import { ProductTypeProvider } from "./products/ProductTypeProvider";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import ProductList from "./products/ProductList";
import LocationList from "./locations/LocationsList";
import EmployeeList from "./employees/EmployeeList";
import "./locations/Locations.css";
import "./products/Product.css";
import "./employees/Employees.css";

export default () => (
  <>
    <h2>Kandy Korner</h2>
    <small>The small treats in life!</small>
    <address>
      <div>Visit Us at the Nashville Location</div>
      <div>100 candy Way</div>
    </address>
    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
    <h2>Products</h2>
    <ProductProvider>
      <ProductTypeProvider>
        <ProductList />
      </ProductTypeProvider>
    </ProductProvider>
    <h2>Employees</h2>
    <EmployeeProvider>
      <LocationProvider>
        <EmployeeList />
      </LocationProvider>
    </EmployeeProvider>
  </>
);
