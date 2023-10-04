import ProductData from "./Data";
import book from "./book.jpg";
import "./product.css";

function Product() {
  return (
    <div className="contain">
      {ProductData.map((product) => {
        return (
          <div className="box">
            <div className="innerbox">
              <div className="product-image">
                <img src={book} alt={product.Title} />
              </div>
              <div className="product-details">
                <div className="product-title">{product.Title}</div>
                <div className="product-author">{product.author}</div>
                <div className="product-genre">{product.genre}</div>
                <div className="product-price">{product.price}</div>
              </div>
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
