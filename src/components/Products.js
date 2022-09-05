import Product from "./Product";

function Products() {
  return (
    <>
      <div className="bar2">
        <input type="text" placeholder="buscar"></input>
      </div>
      <div className="products">
        <Product />
      </div>

      <div className="productopic"></div>
    </>
  );
}
export default Products;
