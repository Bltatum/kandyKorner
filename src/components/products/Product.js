import React from "react";

export default ({ product, productType }) => (
  <section className="product">
    <div className="product_productTypeId">{productType.name}</div>
    <h3 className="product_name">{product.name}</h3>
    <div className="product_price">Price: ${product.price}</div>
  </section>
);
