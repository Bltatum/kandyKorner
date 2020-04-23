import React, { useState, useEffect } from "react";

export const ProductTypeContext = React.createContext();

export const ProductTypeProvider = (props) => {
  const [productType, setProductTypes] = useState([]);

  const getProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
      .then((res) => res.json())
      .then(setProductTypes);
  };

  const addProductType = (productType) => {
    return fetch("http://localhost:8088/productTypes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productType),
    }).then(getProductTypes);
  };

  useEffect(() => {
    getProductTypes();
  }, []);

  useEffect(() => {
    console.log("****  Product APPLICATION STATE CHANGED  ****");
  }, [productType]);

  return (
    <ProductTypeContext.Provider
      value={{
        productType,
        addProductType,
      }}
    >
      {props.children}
    </ProductTypeContext.Provider>
  );
};
