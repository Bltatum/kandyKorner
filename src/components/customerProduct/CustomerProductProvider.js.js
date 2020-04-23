import React, { useState, useEffect } from "react";

export const CustomerProductContext = React.createContext();

export const CustomerProductProvider = (props) => {
  const [CustomerProduct, setCustomerProduct] = useState([]);

  const getCustomerProduct = () => {
    return fetch("http://localhost:8088/CustomerProduct")
      .then((res) => res.json())
      .then(setCustomerProduct);
  };

  const addCustomerProduct = (CustomerProduct) => {
    return fetch("http://localhost:8088/CustomerProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CustomerProduct),
    }).then(getCustomerProduct);
  };

  useEffect(() => {
    getCustomerProduct();
  }, []);

  useEffect(() => {
    console.log("****  CustomerProduct APPLICATION STATE CHANGED  ****");
  }, [CustomerProduct]);

  return (
    <CustomerProductContext.Provider
      value={{
        CustomerProduct,
        addCustomerProduct,
      }}
    >
      {props.children}
    </CustomerProductContext.Provider>
  );
};
