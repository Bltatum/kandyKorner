import React, { useContext, useRef } from "react";
import { ProductContext } from "./ProductProvider";
import { ProductTypeContext } from "./ProductTypeProvider";
import { CustomerProductContext } from "../customerProduct/CustomerProductProvider.js";
import { Button } from "reactstrap";
import Product from "./Product";

export default () => {
  const { products } = useContext(ProductContext);
  const { productType } = useContext(ProductTypeContext);
  const { addCustomerProduct } = useContext(CustomerProductContext);
  const { CustomerProduct } = useContext(CustomerProductContext);

  const purchaseCandy = (productId) => {
    const userId = parseInt(localStorage.getItem("kandy_customer"));

    addCustomerProduct({
      productId: productId,
      customerId: userId,
    });
  };

  return (
    <div className="products">
      {products.map((pro) => {
        const foundProductType = productType.find(
          (pt) => pt.id === pro.productTypeId
        );

        return (
          <>
            <Product
              key={pro.id}
              product={pro}
              productType={foundProductType}
            />
            <Button
              type="submit"
              onClick={(evt) => {
                evt.preventDefault(); // Prevent browser from submitting the form
                purchaseCandy(pro.id);
              }}
              className="btn btn-primary"
            >
              Buy Candy
            </Button>
          </>
        );
      })}
    </div>
  );
};
