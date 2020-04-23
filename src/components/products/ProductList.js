import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";
import { ProductTypeContext } from "./ProductTypeProvider";
import Product from "./Product";

export default () => {
  const { products } = useContext(ProductContext);
  const { productType } = useContext(ProductTypeContext);

  return (
    <div className="products">
      {products.map((pro) => {
        const foundProductType = productType.find(
          (pt) => pt.id === pro.productTypeId
        );

        return (
          <Product key={pro.id} product={pro} productType={foundProductType} />
        );
      })}
    </div>
  );
};
