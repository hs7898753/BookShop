import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
import Product from "../Product"
function Shop() {
  return (
    <div className="shop">
      <Navbar />
      <ShopContent />
      <Footer />
    </div>
  );
}

function ShopContent(){
  const handleaddbookClick = () => {
    if (window.location.pathname !== "/addbook") {
      window.location.href = "/addbook";
    }
  };
  return (
    <div className="shop-content">
      <div className="productList">
        <section className="filter"><h1>Filter</h1></section>
        <section className="product">
          <div className="row2">
          <button className="sellbook" onClick={handleaddbookClick}>Add Book</button>
            <Product />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;