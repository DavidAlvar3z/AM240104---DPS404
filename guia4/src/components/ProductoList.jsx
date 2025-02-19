import React from "react";
import { data } from "../app/data";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {

  const onAddProduct = (product) => {
    // Si el producto ya está en el carrito, actualizamos su cantidad
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      // Actualizamos el total y la cantidad de productos en el carrito
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...products]);
    } else {
      // Si el producto no está en el carrito, lo agregamos con cantidad 1
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.urlImage} alt={product.title} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};