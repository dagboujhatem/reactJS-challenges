import React from "react";
import styled from "styled-components";
import products from "../products.json";
import Product from "../components/Product";

export default function ProductDetails(props) {
    const name = this.props.match.params.name;
    const toRender = products.filter((product) => product.name === name)[0];
    return (
      <>
        <button onClick={() => this.props.history.replace("/products")}>
          Return to products
        </button>
        <ProductsWrapper>
          {toRender ? (
            <Product product={toRender}></Product>
          ) : (
            <p>Product not found</p>
          )}
        </ProductsWrapper>
      </>
    );
}

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
