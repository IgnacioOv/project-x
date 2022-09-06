import Product from "./Product";
import SearchBar from "./SearchBar";
function Products() {
  return (
    <>
      <div className="bar2">
        <SearchBar />
      </div>

      <div className="products">
        <Product />
      </div>

      <div className="productopic"></div>
    </>
  );
}
export default Products;
