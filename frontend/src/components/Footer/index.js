import "./index.css";
function Footer() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
        width: 150,
      }}
    />
  );
  return (
    <footer>
      <section className="sec1">
        <div className="mission">
          <h1>Our Mission</h1>
          <br />
          <p>
          At <strong>bookShop</strong>, our mission is to inspire a love for reading and connect book enthusiasts with the stories that matter most to them. We believe that books have the power to ignite imaginations, broaden horizons, and transform lives. Our dedication to this mission drives everything we do.
          </p>
        </div>
        <div className="products">
          <h3>Products</h3>
          <ColoredLine color="white" />
          <br />
          <ul>
            <li>Prices Drop</li>
            <li>New Products</li>
            <li>Best Sales</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="company">
          <h3>Our Company</h3>
          <ColoredLine color="white" />
          <br />
          <ul>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="information">
          <h3>Information</h3>
          <ColoredLine color="white" />
          <br />
          <ul>
            <li>Your Orders</li>
            <li>Your Wishlist</li>
            <li>Newsletter</li>
            <li>Information</li>
          </ul>
        </div>
      </section>
      <section className="sec2">
        Copywrite ©bookShop. All Rights Reserved
      </section>
    </footer>
  );
}

export default Footer;