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
  return (
    <div className="shop-content">
      <div className="productList">
        <section className="filter">Filter</section>
        <section className="product">
          <div className="row2">
            <Product />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;